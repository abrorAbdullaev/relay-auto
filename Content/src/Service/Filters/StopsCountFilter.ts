import { FilterInterface } from "../../Models/FilterInterface";
import { CandidateLoad, Load } from "../../Models";

export class StopsCountFilter implements FilterInterface {
  /**
   * The function runs through the trucks and loads and filters out the candidates for each truck
   * If this is a first filter in the filters pipeline, then the response loads will be used to iterate
   * if the filter is not first in pipeline, it means first iteration is done and now the method can rely on already filtered
   * values from candidates directly, not from the response loads from relay
   * 
   * @param currentCandidates CandidateLoad[]
   * @param loads Load[]
   * @returns CandidateLoad[]
   */
  filter(currentCandidates: Array<CandidateLoad>, loads?: Array<Load>): Array<CandidateLoad> {
      currentCandidates.forEach((currentCandidate) => {
        const stopCountLimit = 2; // TODO make dynamic from truck object
        const iterationLoads = !!loads ? loads : currentCandidate.loads;

        iterationLoads.forEach((load) => {
          if (load.stopCount <= stopCountLimit) {
            currentCandidate.loads.push(load);
          }
        });
      });

    return currentCandidates;
  }
}