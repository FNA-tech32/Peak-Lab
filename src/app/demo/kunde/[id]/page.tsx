import { CoachKopf } from "@/components/coach/CoachKopf";
import { DemoBanner } from "@/components/demo/DemoBanner";
import { DemoDetail } from "@/components/demo/DemoDetail";
import { useParams } from "react-router-dom";

export default function DemoKundeSeite() {
  const { id = "" } = useParams();
  return (
    <main className="flex-1">
      <DemoBanner />
      <CoachKopf basis="/demo" etikett="Demo" />
      <DemoDetail id={id} />
    </main>
  );
}
