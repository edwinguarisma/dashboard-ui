import { useState } from "react";
import { RiMenu3Line, RiCloseLargeFill, RiDropboxFill } from "react-icons/ri";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { Button } from "./components/Button/Button";
import { Search } from "./components/Layout/Search";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const handleSiderBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6 relative">
        {/* SIDE BAR --------------------------> */}
        <Sidebar sidebar={sidebar}></Sidebar>

        {/* BUTTON NAV --------------------------> */}
        <Button
          handleSiderBar={handleSiderBar}
          className=" absolute bottom-6 right-4 p-2 rounded-full text-xl lg:hidden z-[100]"
        >
          {sidebar ? <RiCloseLargeFill /> : <RiMenu3Line />}
        </Button>
        {/* CONTENT */}
        <div className=" col-span-5">
          {/* HEADER -------------------------> */}
          <Header></Header>

          {/* CONTENIDO */}
          <main className="p-8">
            {/* TITLE */}
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-gray-700">
                Dashboard
              </h1>
            </div>

            {/* SEARCH */}
            <Search></Search>

            {/* RESULTS */}
            <div className="mt-16 flex justify-between px-4 flex-wrap">
              <p className="text-gray-500 font-semibold">
                Encontramos <span className="text-teal-500">523</span> Trabajos
              </p>
              <div className="flex gap-2 text-gray-500">
                <p>Ordenar por:</p>
                <form>
                  <select
                    className="outline-none pl-2 text-teal-600 font-medium cursor-pointer"
                    name=""
                    id=""
                  >
                    <option value="">Selecionar</option>
                    <option value="data">Fecha</option>
                  </select>
                </form>
              </div>
            </div>

            {/* CARD RESULTS */}
            <div className="mt-4">
              <div className="w-full bg-white p-8 rounded-lg shadow-xl">
                <div className="">
                  <RiDropboxFill></RiDropboxFill>
                </div>

                <div className="">
                  <div className="">
                    <h3 className="">UX Desiner</h3>
                    <div className="">
                      <span>Remoto</span>
                      <span>Sketch</span>
                    </div>
                  </div>
                  <div className="">
                    <p>Dropbox</p>
                    <p>Warszawa</p>
                  </div>
                </div>

                <div className=""></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
