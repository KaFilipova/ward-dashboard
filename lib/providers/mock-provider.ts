import type { DataProvider } from "@/lib/data-provider";
import type { Patient, Ward } from "@/types";

const mockWards: Ward[] = [
  { id: "ward-12", number: 12 },
  { id: "ward-14", number: 14 },
  { id: "ward-21", number: 21 },
];

const mockPatients: Patient[] = [
  {
    id: "patient-001",
    name: "Elena Volkova",
    diagnosis: "Community-acquired pneumonia",
    severity: "moderate",
    conditionDescription: "Fever and productive cough; oxygen saturation stable on room air.",
    isPriority: true,
    wardId: "ward-12",
  },
  {
    id: "patient-002",
    name: "Igor Petrov",
    diagnosis: "Closed fracture of the left radius",
    severity: "mild",
    conditionDescription: "Immobilized arm; pain controlled; awaiting orthopedic follow-up.",
    isPriority: false,
    wardId: "ward-12",
  },
  {
    id: "patient-003",
    name: "Maria Sokolova",
    diagnosis: "Acute decompensated heart failure",
    severity: "severe",
    conditionDescription: "Marked dyspnea at rest and peripheral edema; requires close observation.",
    isPriority: true,
    wardId: "ward-14",
  },
  {
    id: "patient-004",
    name: "Pavel Orlov",
    diagnosis: "Acute gastritis",
    severity: "mild",
    conditionDescription: "Epigastric discomfort after meals; eating a light diet without vomiting.",
    isPriority: false,
    wardId: "ward-14",
  },
  {
    id: "patient-005",
    name: "Anna Lebedeva",
    diagnosis: "COPD exacerbation",
    severity: "moderate",
    conditionDescription: "Increased shortness of breath and wheezing; responding slowly to current treatment.",
    isPriority: true,
    wardId: "ward-21",
  },
  {
    id: "patient-006",
    name: "Dmitry Kuznetsov",
    diagnosis: "Postoperative appendectomy",
    severity: "mild",
    conditionDescription: "Stable after surgery; wound clean; mobilizing with assistance.",
    isPriority: false,
    wardId: "ward-21",
  },
  {
    id: "patient-007",
    name: "Olga Morozova",
    diagnosis: "Unstable angina",
    severity: "severe",
    conditionDescription: "Recurrent chest pain at rest; cardiac monitoring in progress.",
    isPriority: true,
    wardId: "ward-14",
  },
];

export class MockProvider implements DataProvider {
  getPatients(): Promise<Patient[]> {
    return Promise.resolve(mockPatients);
  }

  getWards(): Promise<Ward[]> {
    return Promise.resolve(mockWards);
  }
}
