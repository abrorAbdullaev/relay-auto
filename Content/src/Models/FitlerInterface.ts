import { CandidateLoad } from "./CandidateLoad";
import { Load } from "./Load";

export interface FilterInterface {
  filter(currentCandidates: Array<CandidateLoad>, loads?: Array<Load>): Array<CandidateLoad>;
}