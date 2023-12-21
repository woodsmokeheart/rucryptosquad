export type DeepNullable<T> = {
  [K in keyof T]: DeepNullable<T[K]> | null;
};

export type ListenerOptions =
  | boolean
  | {
      capture?: boolean;
      once?: boolean;
      passive?: boolean;
      signal?: AbortSignal;
    };

export type AnyFunction = (...args: any[]) => any;
export type ExcludeFunction<T> = Exclude<T, AnyFunction>;
