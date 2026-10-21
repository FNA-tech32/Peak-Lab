import { CoachKopf } from "@/components/coach/CoachKopf";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { DemoUebersicht } from "@/components/demo/DemoUebersicht";

export default function DemoSeite() {
  return (
    <main className="flex-1">
      <DemoBanner />
      <CoachKopf basis="/demo" etikett="Demo" />
      <DemoUebersicht />
    </main>
  );
}
