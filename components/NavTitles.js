import Link from "next/link";
function NavTitles({ name }) {
  return (
    <div>
      <Link href={"/?genre=" + name}>
        <a className="text-gray-400 pr-10 whitespace-nowrap hover:text-white active:text-[#1CE783]">
          {name}
        </a>
      </Link>
    </div>
  );
}

export default NavTitles;
