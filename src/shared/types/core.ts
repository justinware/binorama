export interface Id {
  id: string;
}

export interface Idable {
  id?: string;
}

export type Key<TKey = string> = {
  key: TKey;
};

export type Name = {
  name: string;
};

export type Value<TValue = string> = {
  value?: TValue;
};

export type KeyValuePair<TKey = string, TValue = string> = Key<TKey> &
  Value<TValue>;

export type NameValuePair<TValue = string> = Name & Value<TValue>;

export type Order = {
  order: number;
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
