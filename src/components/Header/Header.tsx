import {
  RiNotification2Line,
  RiArrowDownSFill,
  RiSearchLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";

export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row w-full bg-white p-4 md:pl-8 px-8 justify-between items-center shadow gap-4">
      {/* SEARCH */}
      <form className="w-full md:w-[40%] lg:w-[30%] order-1 md:order-none">
        <div className="flex items-center gap-3 text-gray-400 relative">
          <RiSearchLine className=" absolute left-2 top-3"></RiSearchLine>
          <input
            type="text"
            placeholder="Buscar"
            className=" outline-none bg-gray-100 py-2 pl-8 pr-4 rounded-lg w-full"
          />
        </div>
      </form>

      {/* NOTIFICATION */}
      <nav className="w-full md:[60%] lg:w-[70%] flex justify-center md:justify-end">
        <ul className="flex items-center gap-6">
          <li>
            <a className="text-xl cursor-pointer relative hover:text-teal-600 transition-colors">
              <RiNotification2Line></RiNotification2Line>
              <RiCheckboxBlankCircleFill className="text-[10px] absolute -top-0.5 right-0 text-red-600"></RiCheckboxBlankCircleFill>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1 ">
              Edwin Guarisma
              <RiArrowDownSFill></RiArrowDownSFill>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
