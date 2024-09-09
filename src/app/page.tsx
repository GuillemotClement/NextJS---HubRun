// import Homepage from "./pages/Homepage";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <section className="flex flex-col gap-y-12 py-14">
      <div className="">
        <h2 className="my-12 text-center text-2xl font-bold uppercase">
          Bienvenue sur HubRun !
        </h2>
        <div className="my-12 flex items-center justify-center gap-x-10">
          <div className="flex flex-col gap-y-5">
            <p className="w-[400px]">
              Le site est actuellement en construction, mais tu peux déjà
              explorer notre section Outils pour découvrir un avant-goût de ce
              que nous préparons pour toi.
            </p>
            <div className="self-center">
              <Button asChild className="shadow-lg">
                <Link href="/tools">Tchek ça</Link>
              </Button>
            </div>
          </div>
          <Image
            alt=""
            src="/picture/homepage1.jpg"
            width={400}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-y-6">
        <h3 className="text-center text-xl font-bold">
          Fonctionnalités prévués
        </h3>

        <div className="my-7 flex items-center justify-center gap-x-10">
          <Image
            alt=""
            src="/picture/homepagePlan.jpg"
            width={400}
            height={500}
            className="rounded-lg shadow-md"
          />
          <div className="">
            <h4 className="mb-3 text-lg font-semibold">
              Programmation d&apos;entraînement
            </h4>
            <p className="w-[400px]">
              Tu pourras créer des séances et les prévoir sur ton calendrier. Si
              tu es accompagné par un coach, il pourra facilement venir les
              ajouter à ton calendrier.
            </p>
          </div>
        </div>

        <div className="my-7 flex items-center justify-center gap-x-10">
          <div className="">
            <h4 className="mb-3 text-lg font-semibold">
              Calendrier de courses
            </h4>
            <p className="w-[400px]">
              Tu pourras accéder au calendrier de courses (route, trail) et
              venir l&apos;ajouter rapidement à ton calendrier. Tu pourras ainsi
              obtenir la durée en mois, semaine ou jours avant cet objectif.
            </p>
          </div>
          <Image
            alt=""
            src="/picture/homepageCalendar.jpg"
            width={400}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="my-7 flex items-center justify-center gap-x-10">
          <Image
            alt=""
            src="/picture/homepageBlog.jpg"
            width={400}
            height={500}
            className="rounded-lg shadow-md"
          />
          <div className="">
            <h4 className="mb-3 text-lg font-semibold">Blog</h4>
            <p className="w-[400px]">
              Dans la partie Blog, tu pourras retrouver de nombreux articles
              ayant pour sujet la nutrition, le renfo, les blessures, des
              reviews matos, etc
            </p>
          </div>
        </div>

        <div className="my-7 flex items-center justify-center gap-x-10">
          <div className="">
            <h4 className="mb-3 text-lg font-semibold">Social</h4>
            <p className="w-[400px]">
              Dans la partie sociale, tu pourras venir créer des rendez-vous et
              les utilisateurs inscrits pourront venir te rejoindre s&apos;ils
              le souhaitent pour partager un moment running
            </p>
          </div>
          <Image
            alt=""
            src="/picture/homepageSocial.jpg"
            width={400}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="my-7 flex items-center justify-center gap-x-10">
          <Image
            alt=""
            src="/picture/homepageStat.jpg"
            width={400}
            height={500}
            className="rounded-lg shadow-md"
          />
          <div className="">
            <h4 className="mb-3 text-lg font-semibold">Recap</h4>
            <p className="w-[400px]">
              Sur cette page, tu pourras retrouver de nombreuses statistiques
              sur tes performances. De quoi être fière de tes progrès !
            </p>
          </div>
        </div>

        <div className="my-7 flex items-center justify-center gap-x-10">
          <div className="">
            <h4 className="mb-3 text-lg font-semibold">BetaTest</h4>
            <p className="w-[400px]">
              Tu pourras demander à accéder à la bêta pour faire partie des élus
              et pouvoir tester l&apos;application pendant son développement. 
            </p>
          </div>
          <Image
            alt=""
            src="/picture/homepageBeta.jpg"
            width={400}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
