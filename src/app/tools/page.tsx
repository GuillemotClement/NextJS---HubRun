import Image from "next/image";

export default function Tool() {
  return (
    <div className="flex flex-col px-3">
      <h2 className="my-3 text-center text-xl font-semibold">
        Découvrez nos outils de calcul pratiques pour vos activités sportives
      </h2>
      <div className="my-4 flex gap-x-3">
        <p className="w-96 text-justify">
          Notre application vous propose une série d&apos;outils simples et
          efficaces pour vous aider à mieux planifier et analyser vos
          performances. Que vous ayez besoin de calculer des pourcentages
          rapidement, de convertir des vitesses de km/h en min/km (et
          inversement), ou de prévoir la durée d&apos;une course en fonction de
          votre vitesse moyenne, nos outils sont là pour vous accompagner.
        </p>
        <Image
          src="/picture/compteur.jpg"
          width={250}
          height={250}
          alt="Test image"
          className="rounded-md shadow-md"
        />
      </div>
      <div className="my-4 flex gap-x-3 self-end">
        <p className="w-96 text-justify">
          Ces calculatrices vous permettront de gagner du temps et
          d&apos;obtenir des résultats précis en quelques clics. Idéal pour les
          sportifs, les entraîneurs ou toute personne souhaitant optimiser ses
          séances d&apos;entraînement.
        </p>
        <Image
          src="/picture/tool1.jpg"
          width={250}
          height={250}
          alt="Test image"
          className="rounded-md shadow-md"
        />
      </div>
    </div>
  );
}
