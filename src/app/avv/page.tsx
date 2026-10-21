import { Kicker } from "@/components/ui/Abschnittskopf";
import Link from "@/lib/link";
import { BETREIBER, KONTAKT_EMAIL, MARKE, RECHTSTEXTE_STAND } from "@/lib/rechtstexte";

const stand = RECHTSTEXTE_STAND.split("-").reverse().join(".");
const linkKlassen = "text-akzent underline underline-offset-4 break-words";

export default function AvvSeite() {
  return (
    <main className="flex-1">
      <article className="mx-auto max-w-2xl px-5 py-12 lg:py-16">
        <Kicker>Rechtliches</Kicker>
        <h1 className="mt-2 font-serif text-3xl font-normal tracking-tight sm:text-4xl">
          Vertrag zur Auftragsverarbeitung
        </h1>
        <p className="mt-2 font-mono text-[12px] text-text-leise">Hinweis zur Demo · Stand {stand}</p>

        <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-text-zwei">
          <p>
            Diese Website von {MARKE} ist eine Demo im Browser. Sie speichert keine Check-ins von Kunden auf
            einem Server und richtet kein Coach-Konto ein. Durch das Ausprobieren der Demo kommt kein Vertrag
            zur Auftragsverarbeitung zustande.
          </p>
          <p>
            Auftragnehmer für eine spätere Verarbeitung wäre {BETREIBER}, erreichbar unter{" "}
            <a href={`mailto:${KONTAKT_EMAIL}`} className={linkKlassen}>
              {KONTAKT_EMAIL}
            </a>
            .
          </p>
          <p>
            Was die Demo lokal speichert, steht in der{" "}
            <Link href="/datenschutz" className={linkKlassen}>
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
      </article>
    </main>
  );
}
