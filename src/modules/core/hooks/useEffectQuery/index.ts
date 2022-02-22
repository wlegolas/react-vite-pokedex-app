import { useEffect, useMemo } from 'react';
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

export const useEffectQuery = <TEffectQueryFnData = unknown>(
  options: UseEffectQueryOptions<TEffectQueryFnData>
): UseEffectQueryResult<TEffectQueryFnData> => {
  const effectEvent = useMemo(() => createEffectQueryEvent(options), [options.queryName, options.queryFn]);
  const effectStore = useMemo(() => createEffectQueryStore(effectEvent), [options.queryName, options.queryFn]);
  const state = useStore(effectStore);

  useEffect(() => {
    effectEvent();
  }, []);

  return {
    event: effectEvent,
    store: effectStore,
    ...state,
  };
};
