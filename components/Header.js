import Image from "next/image";
import HeaderIcons from "./HeaderIcon";

function Header({ header_labels, header_icons_label }) {
  return (
    <div>
      <div className="text-center pt-4 sm:pt-0 sm:flex flex-row justify-between items-center px-10">
        <div className="flex flex-row justify-center flex-grow sm:justify-start max-w-[40rem]">
          {header_labels.map((element, key) => (
            <HeaderIcons
              key={key}
              Icon={header_icons_label[key]}
              label={element}
            />
          ))}
        </div>
        <div className="mt-[-25px] sm:mt-0">
          <Image src="/hulu.svg" alt="hulu" width={150} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Header;
