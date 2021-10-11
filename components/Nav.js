import NavTitles from "./NavTitles";

function Nav({ genre_list }) {
  return (
    <nav>
      <div className="flex flex-row overflow-x-scroll pl-8 scrollbar-hide">
        {genre_list.map((element, index) => (
          <NavTitles key={index} name={element.name} />
        ))}
      </div>
    </nav>
  );
}

export default Nav;
