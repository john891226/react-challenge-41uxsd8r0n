export type Page<T> = {
  page: number;
  page_size: number;
  data: T[];
  total: number;
};
