import { useCallback, useEffect, useMemo } from 'react';
import { createStore, createEffect } from 'effector';
import { useStore } from 'effector-react';
import type {
  UseEffectQueryState,
  EffectFailureResponse,
  UseEffectQueryOptions,
  UseEffectQueryResult,
  UseEffectQueryEvent,
  UseEffectQueryStore,
} from './useEffectQuery';

const createEffectQueryStore = <TEffectQueryFnData = unknown>(
  effectEvent: UseEffectQueryEvent<TEffectQueryFnData>
): UseEffectQueryStore<TEffectQueryFnData> => {
  const initialState: UseEffectQueryState<TEffectQueryFnData> = {
    isLoading: false,
    hasError: false,
    error: '',
    data: undefined,
  };

  const onLoadingBooks = (currentState: UseEffectQueryState<TEffectQueryFnData>) => ({
    ...currentState,
    isLoading: true,
  });

  const onLoadBooksSuccess = (currentState: UseEffectQueryState<TEffectQueryFnData>, data: TEffectQueryFnData) => ({
    ...currentState,
    isLoading: false,
    data,
  });

  const onLoadBooksFailure = (
    currentState: UseEffectQueryState<TEffectQueryFnData>,
    response: EffectFailureResponse
  ) => ({
    ...currentState,
    isLoading: false,
    hasError: true,
    error: response.error.message,
  });

  return createStore<UseEffectQueryState<TEffectQueryFnData>>(initialState)
    .on(effectEvent, onLoadingBooks)
    .on(effectEvent.doneData, onLoadBooksSuccess)
    .on(effectEvent.fail, onLoadBooksFailure);
};

const createEffectQueryEvent = <TEffectQueryFnData = unknown>({
  queryName,
  queryFn,
}: UseEffectQueryOptions<TEffectQueryFnData>): UseEffectQueryEvent<TEffectQueryFnData> => {
  return createEffect<void, TEffectQueryFnData, Error>({
    name: queryName,
    handler: queryFn,
  });
};

const adaptOptions = <TEffectQueryFnData>(
  options: UseEffectQueryOptions<TEffectQueryFnData>
): UseEffectQueryOptions<TEffectQueryFnData> => {
  const memoizedQueryFn = useCallback(options.queryFn, [options.queryName]);

  return { ...options, queryFn: memoizedQueryFn };
};

export const useEffectQuery = <TEffectQueryFnData = unknown>(
  options: UseEffectQueryOptions<TEffectQueryFnData>
): UseEffectQueryResult<TEffectQueryFnData> => {
  const queryOptions = adaptOptions(options);
  const fetchDataFx = useMemo(() => createEffectQueryEvent(queryOptions), [queryOptions.queryName]);
  const $store = useMemo(() => createEffectQueryStore(fetchDataFx), [queryOptions.queryName]);
  const state = useStore($store);

  useEffect(() => {
    fetchDataFx();
  }, []);

  return {
    event: fetchDataFx,
    store: $store,
    ...state,
  };
};
