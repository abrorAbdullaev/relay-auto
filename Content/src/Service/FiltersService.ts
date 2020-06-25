import { Load, CandidateLoad } from "../Models";
import { Truck } from "../../../Shared";
import { allFilters } from './Filters';

export class FiltersService {
  /**
   * Filters the given loads list baed on each truck's parameters and
   * gives back the array of potential loads for potential trucks
   * 
   * @param loads list of loads received from relay api
   * @returns Array(<{
    * id: string identifier of the truck
    * load: potential load for the truck
   * }>)
   */
  async collectCandidates(loads: Array<Load>, trucks: Truck[]): Promise<Array<CandidateLoad>> {
    let candidates: Array<CandidateLoad> = trucks.map((truck) => ({ 
      truck: truck,
      loads: [],
    }));

    return new Promise((resolve) => {
      //First Filter
      const firstFilter = allFilters.shift();
      candidates = firstFilter ? firstFilter.filter(candidates, loads) : candidates;

      // All the remaining filters
      allFilters.forEach((filterInterface) => {
        candidates = filterInterface.filter(candidates);
      });
      
      resolve(candidates);
    });
  }
}
