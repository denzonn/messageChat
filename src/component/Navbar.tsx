const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between px-20 py-8 items-center">
      <div>
        <i className="fa-solid fa-bars-staggered text-4xl"></i>
      </div>
      <div className="flex">
        <ul className="flex text-lg font-light">
          <li className="mx-2">Home</li>
          <li className="mx-2">Service</li>
          <li className="mx-2">About</li>
        </ul>
      </div>
      <div className="flex flex-row gap-x-2 items-center">
        <i className="fa-solid fa-circle text-xs"></i>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
