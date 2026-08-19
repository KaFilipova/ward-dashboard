import { MockProvider } from "@/lib/providers/mock-provider";
import type { DataProvider } from "@/lib/data-provider";
import { WardDashboard } from "./ward-dashboard";
import styles from "./page.module.css";

export default async function Home() {
  const dataProvider: DataProvider = new MockProvider();
  const [wards, patients] = await Promise.all([
    dataProvider.getWards(),
    dataProvider.getPatients(),
  ]);

  return (
    <main className={styles.dashboard}>
      <h1 className={styles.title}>Ward Dashboard</h1>
      <WardDashboard wards={wards} patients={patients} />
    </main>
  );
}
