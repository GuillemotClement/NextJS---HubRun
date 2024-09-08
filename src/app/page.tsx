// import Homepage from "./pages/Homepage";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="container mx-auto flex min-h-full flex-col items-center bg-slate-200">
      <h2>Welcome in HubRun</h2>
      <p>
        Le site est actuellement en construction. Tu peux quand même accéder aux
        outils :
      </p>
      <Button asChild>
        <Link href="/tools">Outils</Link>
      </Button>

      <h3>Preview</h3>
      <p>Voici nos fonctionnalités futures :</p>
      <ul>
        <li>Programmation d'entrainement</li>
        <li>Calendrier des courses</li>
        <li>Blogs</li>
        <li>
          Un aspect social pour prévoir des sorties et ne pas pratiquer solo
        </li>
        <li>Un recap de t'es stats</li>
      </ul>
    </div>
  );
}
