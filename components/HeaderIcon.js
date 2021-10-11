function Header({ Icon, label }) {
  return (
    <header className="w-8 sm:w-10 flex flex-col items-center sm:flex-grow cursor-pointer group">
      <Icon className="w-7 h-7 text-gray-400 transition-all group-hover:animate-bounce group-hover:text-white" />
      <h1 className="text-gray-400 group-hover:text-white uppercase tracking-widest text-md opacity-0 group-hover:opacity-100 transition-all duration-300">
        {label}
      </h1>
    </header>
  );
}

export default Header;
