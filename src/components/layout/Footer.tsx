import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex items-center justify-between px-4 py-3">
      <div className="">
        <p>Copyright &copy; - {year}</p>
        <p>
          Made with love by
          <Link
            target="_blanck"
            href="https://github.com/GuillemotClement"
            className="hover:text-slate-400"
          >
            Clément
          </Link>
        </p>
      </div>
      <ul className="flex gap-x-3">
        <li className="hover:text-slate-400">
          <Link target="_blanck" href="#">
            <FontAwesomeIcon icon={faStrava}></FontAwesomeIcon>
          </Link>
        </li>
        <li className="hover:text-slate-400">
          <Link target="_blanck" href="#">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </Link>
        </li>
        <li className="hover:text-slate-400">
          <Link target="_blanck" href="#">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </Link>
        </li>
        <li className="hover:text-slate-400">
          <Link target="_blanck" href="#">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
