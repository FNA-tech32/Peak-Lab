import { useEffect, type ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import DatenschutzSeite from "@/app/datenschutz/page";
import DemoCheckinSeite from "@/app/demo/checkin/page";
import DemoKundeSeite from "@/app/demo/kunde/[id]/page";
import DemoKundenSeite from "@/app/demo/kunden/page";
import DemoSeite from "@/app/demo/page";
import DemoWillkommenSeite from "@/app/demo/willkommen/page";
import AvvSeite from "@/app/avv/page";
import LoginSeite from "@/app/login/page";
import NichtGefunden from "@/app/not-found";
import Startseite from "@/app/page";
import { ModusSchalter } from "@/components/ModusSchalter";
import Link from "@/lib/link";

function MitTitel({ titel, children }: { titel: string; children: ReactNode }) {
  useEffect(() => {
    document.title = titel;
  }, [titel]);
  return children;
}

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MitTitel titel="Peak Lab">
              <Startseite />
            </MitTitel>
          }
        />
        <Route
          path="/demo"
          element={
            <MitTitel titel="Coach-Übersicht · Peak Lab Demo">
              <DemoSeite />
            </MitTitel>
          }
        />
        <Route
          path="/demo/checkin"
          element={
            <MitTitel titel="Check-in · Peak Lab Demo">
              <DemoCheckinSeite />
            </MitTitel>
          }
        />
        <Route
          path="/demo/kunden"
          element={
            <MitTitel titel="Kunden verwalten · Peak Lab Demo">
              <DemoKundenSeite />
            </MitTitel>
          }
        />
        <Route
          path="/demo/willkommen"
          element={
            <MitTitel titel="Einführung · Peak Lab Demo">
              <DemoWillkommenSeite />
            </MitTitel>
          }
        />
        <Route
          path="/demo/kunde/:id"
          element={
            <MitTitel titel="Kunde · Peak Lab Demo">
              <DemoKundeSeite />
            </MitTitel>
          }
        />
        <Route
          path="/login"
          element={
            <MitTitel titel="Kontakt · Peak Lab">
              <LoginSeite />
            </MitTitel>
          }
        />
        <Route
          path="/datenschutz"
          element={
            <MitTitel titel="Datenschutz · Peak Lab">
              <DatenschutzSeite />
            </MitTitel>
          }
        />
        <Route
          path="/avv"
          element={
            <MitTitel titel="Auftragsverarbeitung · Peak Lab">
              <AvvSeite />
            </MitTitel>
          }
        />
        <Route
          path="*"
          element={
            <MitTitel titel="Seite nicht gefunden · Peak Lab">
              <NichtGefunden />
            </MitTitel>
          }
        />
      </Routes>
      <footer className="flex flex-wrap items-center justify-center border-t border-linie px-5 py-5 text-[13px] text-text-leise">
        <Link href="/datenschutz" className="inline-flex min-h-11 items-center px-3 transition-colors hover:text-text">
          Datenschutz
        </Link>
        <Link href="/avv" className="inline-flex min-h-11 items-center px-3 transition-colors hover:text-text">
          Vertrag zur Auftragsverarbeitung
        </Link>
        <Link href="/login" className="inline-flex min-h-11 items-center px-3 transition-colors hover:text-text">
          Kontakt
        </Link>
        <ModusSchalter />
      </footer>
    </>
  );
}
