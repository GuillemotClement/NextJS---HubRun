import Link from "next/link";

export default function SideMenu() {
  return (
    <div className="flex flex-shrink-0 items-center justify-center">
      <ul className="mx-3 flex flex-col">
        <li className="cursor-pointer hover:text-slate-400">
          <Link href="/tools">Accueil</Link>
        </li>
        <hr className="my-2" />
        <li className="cursor-pointer hover:text-slate-400">
          <Link href="/tools/pourcent">Pourcentage</Link>
        </li>
        <hr className="my-2" />
        <li className="cursor-pointer hover:text-slate-400">
          <Link href="/tools">Km/h - min/kil </Link>
        </li>
        <hr className="my-2" />
        <li className="cursor-pointer hover:text-slate-400">
          <Link href="/tools">min/kil - km/h</Link>
        </li>
        <hr className="my-2" />
        <li className="cursor-pointer hover:text-slate-400">
          <Link href="/tools">VMA</Link>
        </li>
        <hr className="my-2" />
        <li className="cursor-pointer hover:text-slate-400">
          <Link href="/tools">Prévision temps</Link>
        </li>
      </ul>
    </div>
  );
}
