import { createStore, createEffect } from 'effector';
import { isFunction, isNil } from 'remeda';

type QueryFnResult<TEffectQueryFnData> = TEffectQueryFnData | Promise<TEffectQueryFnData>;

type UseEffectQueryOptions<TEffectQueryFnData> = {
  queryName: string;
  queryFn: () => QueryFnResult<TEffectQueryFnData>;
};

type EffectFailureResponse = {
  error: Error;
};

type UseEffectQueryResult<TEffectQueryFnData> = {
  isLoading: boolean;
  hasError: boolean;
  error: string;
  data?: TEffectQueryFnData;
};

const validateOptions = (options: UseEffectQueryOptions<unknown>): void => {
  if (isNil(options.queryFn) || !isFunction(options.queryFn)) {
    throw new Error('The property "queryFn" is not a function or was not defined.');
  }
};

export const useEffectQuery = <TEffectQueryFnData = unknown>(options: UseEffectQueryOptions<TEffectQueryFnData>) => {
  validateOptions(options);

  const effectEvent = createEffect<void, TEffectQueryFnData, Error>({
    name: options.queryName,
    handler: options.queryFn,
  });

  const initialState: UseEffectQueryResult<TEffectQueryFnData> = {
    isLoading: false,
    hasError: false,
    error: '',
    data: undefined,
  };

  const onLoadingBooks = (currentState: UseEffectQueryResult<TEffectQueryFnData>, isLoading: boolean) => ({
    ...currentState,
    isLoading,
  });

  const onLoadBooksSuccess = (currentState: UseEffectQueryResult<TEffectQueryFnData>, data: TEffectQueryFnData) => ({
    ...currentState,
    isLoading: false,
    data,
  });

  const onLoadBooksFailure = (
    currentState: UseEffectQueryResult<TEffectQueryFnData>,
    response: EffectFailureResponse
  ) => ({
    ...currentState,
    isLoading: false,
    hasError: true,
    error: response.error.message,
  });

  const effectStore = createStore<UseEffectQueryResult<TEffectQueryFnData>>(initialState)
    .on(effectEvent.pending, onLoadingBooks)
    .on(effectEvent.doneData, onLoadBooksSuccess)
    .on(effectEvent.fail, onLoadBooksFailure);

  return {
    event: effectEvent,
    store: effectStore,
    ...effectStore.getState(),
  };
};
