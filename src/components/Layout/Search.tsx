import { RiSearchLine, RiMapPinFill, RiFilter3Fill } from "react-icons/ri";
import { citys } from "../../data/citys";
import { Filters } from "../Button/Filters";

export const Search = () => {
  return (
    <>
      {/* SEARCH CONTENT */}
      <div className="grid grid-cols-4 gap-4 items-center mt-6">
        <form className="lg:col-span-2 col-span-4">
          <div className="flex items-center gap-3 text-gray-400 relative w-full border border-gray-200">
            <RiSearchLine className=" absolute left-2 top-3 text-teal-600"></RiSearchLine>
            <input
              type="text"
              placeholder="Buscar"
              className=" outline-none bg-white py-2 pl-8 pr-4 w-full"
            />
          </div>
        </form>

        <form className="lg:col-span-1 md:col-span-2 col-span-4">
          <div className="flex items-center gap-3 text-gray-400 relative w-full border border-gray-200">
            <RiMapPinFill className=" absolute left-2 top-3 text-teal-600"></RiMapPinFill>
            <select
              name=""
              id=""
              className=" outline-none bg-white py-2 pl-8 pr-4 w-full"
            >
              <option value="">-- Elegir un lugar --</option>
              {citys.map((city) => {
                return (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>
        </form>

        <form className="lg:col-span-1 md:col-span-2 col-span-4">
          <div className="flex items-center gap-3 text-gray-400 relative w-full border border-gray-200">
            <RiFilter3Fill className=" absolute left-2 top-3 text-teal-600"></RiFilter3Fill>
            <input
              type="text"
              placeholder="Buscar"
              className=" outline-none bg-white py-2 pl-8 pr-4 w-full"
            />
            <span className="absolute right-2 top-[9px] bg-teal-600 text-white rounded-full py-[2px] px-[8px] text-[12px]">
              4
            </span>
          </div>
        </form>
      </div>

      {/* BOTONES DE FILTROS */}
      <div className="flex gap-4 flex-wrap">
        <Filters text={"Diseño"}></Filters>
        <Filters text={"Desarrollo"}></Filters>
        <Filters text={"Marketing"}></Filters>
        <Filters text={"Ventas"}></Filters>
        <button className="py-2 px-4 rounded-2xl flex gap-2 items-center text-gray-500 mt-6 cursor-pointer">
          Limpiar Todo
        </button>
      </div>
    </>
  );
};
