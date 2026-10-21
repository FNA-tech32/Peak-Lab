import { CoachKopf } from "@/components/coach/CoachKopf";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { DemoVerwaltung } from "@/components/demo/DemoVerwaltung";

export default function DemoKundenSeite() {
  return (
    <main className="flex-1">
      <DemoBanner />
      <CoachKopf basis="/demo" etikett="Demo" />
      <DemoVerwaltung />
    </main>
  );
}
