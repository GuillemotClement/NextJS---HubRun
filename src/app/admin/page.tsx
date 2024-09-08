import Link from "next/link";

export default function Admin() {
  return (
    <div className="">
      <ul>
        <li>
          <Link href="/admin/race">Course</Link>
        </li>
      </ul>
    </div>
  );
}
