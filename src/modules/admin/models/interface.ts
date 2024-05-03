export interface IRootObject<T> {
    took: number;
    timed_out: boolean;
    _shards: IShards;
    hits: IHits<T>;
  }
  
  export interface IHits<T> {
    total: ITotal;
    max_score: number;
    hits: IHit<T>[];
  }
  
  export interface IHit<T> {
    _index: string;
    _type: string;
    _id: string;
    _score: number;
    _source: T;
  }
  

  export interface ITotal {
    value: number;
    relation: string;
  }
  
  export interface IShards {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
  }