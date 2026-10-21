import type { ReactNode } from "react";
import { Kicker } from "@/components/ui/Abschnittskopf";
import Link from "@/lib/link";
import { BETREIBER, KONTAKT_EMAIL, MARKE, RECHTSTEXTE_STAND } from "@/lib/rechtstexte";

const stand = RECHTSTEXTE_STAND.split("-").reverse().join(".");
const linkKlassen = "text-akzent underline underline-offset-4 break-words";

function Abschnitt({ titel, children }: { titel: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-[26px] font-normal leading-tight tracking-tight">{titel}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-text-zwei">{children}</div>
    </section>
  );
}

export default function DatenschutzSeite() {
  return (
    <main className="flex-1">
      <article className="mx-auto max-w-2xl px-5 py-12 lg:py-16">
        <Kicker>Rechtliches</Kicker>
        <h1 className="mt-2 font-serif text-3xl font-normal tracking-tight sm:text-4xl">Datenschutzerklärung</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-text-zwei">
          Hier steht, welche Daten diese Website von {MARKE} verarbeitet. Stand: {stand}.
        </p>

        <Abschnitt titel="Wer ist verantwortlich?">
          <p>
            Verantwortlich für diese Website ist {BETREIBER}. Erreichbar per E-Mail unter{" "}
            <a href={`mailto:${KONTAKT_EMAIL}`} className={linkKlassen}>
              {KONTAKT_EMAIL}
            </a>
            .
          </p>
        </Abschnitt>

        <Abschnitt titel="Was diese Website speichert">
          <p>
            Die öffentliche Website und die Demo laufen in deinem Browser. Check-ins, die du in der Demo
            ausfüllst, bleiben in deinem Browser (localStorage, Schlüssel „peaklab-demo-du“). Sie werden nicht
            an einen Server von {MARKE} gesendet.
          </p>
          <p>
            Die Farbwahl hell oder dunkel wird ebenfalls nur in deinem Browser gespeichert (Schlüssel
            „peaklab-modus“).
          </p>
          <p>Es gibt kein Konto, kein Tracking, keine Analyse und keine Werbung. Die Website setzt kein Cookie.</p>
        </Abschnitt>

        <Abschnitt titel="Schriften">
          <p>
            Die Schriften Inter, Newsreader und JetBrains Mono werden mit der Website ausgeliefert. Dein Browser
            lädt sie nicht von Google nach.
          </p>
        </Abschnitt>

        <Abschnitt titel="Deine Rechte">
          <p>
            Weil die Demo-Daten nur auf deinem Gerät liegen, löschst du sie, indem du die Website-Daten für
            diese Adresse im Browser löschst. Fragen zum Datenschutz schickst du an{" "}
            <a href={`mailto:${KONTAKT_EMAIL}`} className={linkKlassen}>
              {KONTAKT_EMAIL}
            </a>
            .
          </p>
        </Abschnitt>

        <p className="mt-10">
          <Link href="/" className={linkKlassen}>
            Zur Startseite
          </Link>
        </p>
      </article>
    </main>
  );
}
