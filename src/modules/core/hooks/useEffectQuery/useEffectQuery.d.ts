import { Effect, Store } from 'effector';

type QueryFnResult<TEffectQueryFnData> = TEffectQueryFnData | Promise<TEffectQueryFnData>;

type UseEffectQueryOptions<TEffectQueryFnData> = {
  queryName: string;
  queryFn: () => QueryFnResult<TEffectQueryFnData>;
};

type EffectFailureResponse = {
  error: Error;
};

type UseEffectQueryState<TEffectQueryFnData> = {
  isLoading: boolean;
  hasError: boolean;
  error: string;
  data?: TEffectQueryFnData;
};

type UseEffectQueryEvent<TEffectQueryFnData> = Effect<void, TEffectQueryFnData, Error>;

type UseEffectQueryStore<TEffectQueryFnData> = Store<UseEffectQueryState<TEffectQueryFnData>>;

type UseEffectQueryResult<TEffectQueryFnData> = UseEffectQueryState<TEffectQueryFnData> & {
  event: UseEffectQueryEvent<TEffectQueryFnData>;
  store: Store<UseEffectQueryState<TEffectQueryFnData>>;
};
