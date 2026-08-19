"use client";

import { useState } from "react";
import type { Patient, Ward } from "@/types";
import styles from "./page.module.css";

type WardDashboardProps = {
  wards: Ward[];
  patients: Patient[];
};

export function WardDashboard({ wards, patients }: WardDashboardProps) {
  const [patientList, setPatientList] = useState(patients);

  function setPatientPriority(patientId: string, isPriority: boolean) {
    setPatientList((currentPatients) =>
      currentPatients.map((patient) =>
        patient.id === patientId ? { ...patient, isPriority } : patient,
      ),
    );
  }

  return (
    <>
      {wards.map((ward) => {
        const wardPatients = patientList.filter(
          (patient) => patient.wardId === ward.id,
        );
        const priorityCount = wardPatients.filter(
          (patient) => patient.isPriority,
        ).length;

        return (
          <section key={ward.id} className={styles.ward}>
            <header className={styles.wardHeader}>
              <h2 className={styles.wardTitle}>Ward {ward.number}</h2>
              <p className={styles.priorityCount}>
                Priority patients: {priorityCount}
              </p>
            </header>
            <ul className={styles.patientList}>
              {wardPatients.map((patient) => (
                <li
                  key={patient.id}
                  className={
                    patient.isPriority
                      ? styles.priorityPatient
                      : styles.patient
                  }
                >
                  <p className={styles.patientName}>{patient.name}</p>
                  <p>Diagnosis: {patient.diagnosis}</p>
                  <p>Severity: {patient.severity}</p>
                  <p>{patient.conditionDescription}</p>
                  <button
                    type="button"
                    className={styles.priorityButton}
                    onClick={() =>
                      setPatientPriority(patient.id, !patient.isPriority)
                    }
                  >
                    {patient.isPriority
                      ? "Remove priority"
                      : "Mark as priority"}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
