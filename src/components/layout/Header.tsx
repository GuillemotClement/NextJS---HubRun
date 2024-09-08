import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b px-4 py-3">
      <Link className="flex items-center gap-x-2 hover:text-slate-400" href="/">
        <FontAwesomeIcon icon={faMedal} className="text-3xl" />
        <p className="text-2xl">HubRun</p>
      </Link>
      <ul className="flex gap-x-3">
        <li className="hover:text-slate-400">
          <Link href="/">Accueil</Link>
        </li>
        {/* <li className="hover:text-slate-400">
          <Link href="/calendar">Calendrier</Link>
        </li> */}
        <li className="hover:text-slate-400">
          <Link href="/tools">Outils</Link>
        </li>
        {/* <li className="hover:text-slate-400">
          <Link href="training">Entrainement</Link>
        </li>
        <li className="hover:text-slate-400">
          <Link href="blog">Blog</Link>
        </li>
        <li className="hover:text-slate-400">
          <Link href="admin">Admin</Link>
        </li> */}
      </ul>
      {/* <ul className="flex gap-x-3">
        <li className="hover:text-slate-400">
          <Link href="#">Connexion</Link>
        </li>
        <li className="hover:text-slate-400">
          <Link href="#">Inscription</Link>
        </li>
        <li className="hover:text-slate-400">
          <Link href="#">Profil</Link>
        </li>
        <li className="hover:text-slate-400">
          <Link href="#">Deconnexion</Link>
        </li>
      </ul> */}
    </header>
  );
}
