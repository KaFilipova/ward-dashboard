export type Severity = "mild" | "moderate" | "severe";

export type Patient = {
  id: string;
  name: string;
  diagnosis: string;
  severity: Severity;
  conditionDescription: string;
  isPriority: boolean;
  wardId: string;
};

export type Ward = {
  id: string;
  number: number;
};
