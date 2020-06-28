import { FilterInterface } from '../../Models/FilterInterface';
import { StopsCountFilter } from './StopsCountFilter';

export * from './StopsCountFilter';

export const allFilters: Array<FilterInterface> = [
  new StopsCountFilter(),
];
