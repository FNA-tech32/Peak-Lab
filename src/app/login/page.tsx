import { ButtonLink } from "@/components/ui/Button";
import { Hinweisseite } from "@/components/ui/Hinweisseite";
import Link from "@/lib/link";
import { KONTAKT_EMAIL, MARKE } from "@/lib/rechtstexte";

const linkKlassen = "text-akzent underline underline-offset-4 break-words";

export default function LoginSeite() {
  return (
    <Hinweisseite kicker="Peak Lab" titel="Kontakt">
      <p>
        {MARKE} zeigt auf dieser Website die Coach-Demo im Browser. Ein Google-Login ist hier nicht
        eingerichtet.
      </p>
      <p className="mt-3">
        E-Mail:{" "}
        <a href={`mailto:${KONTAKT_EMAIL}`} className={linkKlassen}>
          {KONTAKT_EMAIL}
        </a>
      </p>
      <p className="mt-3">
        Hinweise zur Verarbeitung findest du in der{" "}
        <Link href="/datenschutz" className={linkKlassen}>
          Datenschutzerklärung
        </Link>
        .
      </p>
      <ButtonLink href="/demo" className="mt-6">
        Demo ansehen
      </ButtonLink>
    </Hinweisseite>
  );
}
