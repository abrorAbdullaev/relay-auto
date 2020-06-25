import { FilterInterface } from '../../Models/FitlerInterface';
import { StopsCountFilter } from './StopsCountFilter';

export * from './StopsCountFilter';

export const allFilters: Array<FilterInterface> = [
  new StopsCountFilter(),
];
