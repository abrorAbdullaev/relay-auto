import { Load } from "./Load";
import { Truck } from "../../../Shared";

export interface CandidateLoad {
  truck: Truck;
  loads: Load[];
}