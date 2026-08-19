import type { Patient, Ward } from "@/types";

export interface DataProvider {
  getPatients(): Promise<Patient[]>;
  getWards(): Promise<Ward[]>;
}
