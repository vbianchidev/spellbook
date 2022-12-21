export interface BaseResponseArray<T> {
  count: number;
  data: T[];
}

export interface BaseResponse<T> {
  count: number;
  data: T;
}
