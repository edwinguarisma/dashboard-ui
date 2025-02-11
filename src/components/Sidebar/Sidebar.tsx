import img_sideBar from "../../img/start-img.svg";
import {
  RiDashboardLine,
  RiBriefcaseLine,
  RiCalendarLine,
  RiMessage2Line,
  RiLoginBoxLine,
} from "react-icons/ri";
import { NavItem } from "./NavItem";
import { Logo } from "./Logo";

type SlidebarProps = {
  sidebar: boolean;
};

export const Sidebar = ({ sidebar }: SlidebarProps) => {
  const navItems = [
    {
      icon: <RiDashboardLine className=" text-2xl"></RiDashboardLine>,
      text: "Dashboard",
      href: "#",
    },
    {
      icon: <RiBriefcaseLine className=" text-2xl"></RiBriefcaseLine>,
      text: "Trabajos",
      href: "#",
    },
    {
      icon: <RiCalendarLine className=" text-2xl"></RiCalendarLine>,
      text: "Calendario",
      href: "#",
    },
    {
      icon: <RiMessage2Line className=" text-2xl"></RiMessage2Line>,
      text: "Mensajes",
      href: "#",
    },
  ];

  return (
    <>
      <div
        className={`fixed lg:static w-0.5 top-0 ${
          sidebar ? "-left-0" : "-left-full"
        } w-[80%] md:w-[40%] lg:w-full h-full col-span-1 p-8 bg-white overflow-hidden border-r-gray-300 shadow-xl trass z-50 transition-all`}
      >
        {/* LOGO */}
        <Logo></Logo>

        <div className="h-[600px] flex flex-col justify-between">
          {/* MENU */}
          <nav className="">
            <ul>
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  href={item.href}
                ></NavItem>
              ))}
            </ul>
          </nav>

          {/* IMG AND LOGOUT */}
          <div className="flex flex-col gap-1">
            <img
              className="w-[200px] mx-auto"
              src={img_sideBar}
              alt="Startup life"
            />
            {/* UPDATE */}
            <div className="text-center bg-teal-50 p-4 rounded-2xl flex flex-col gap-2">
              <h3 className="font-semibold text-lg">Mejorar</h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="bg-teal-600 text-white p-2 rounded-lg cursor-pointer hover:bg-teal-700 transition-colors">
                Aprender más
              </button>
            </div>
            <a
              href="#"
              className="flex items-center gap-4 hover:bg-teal-600 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors"
            >
              <RiLoginBoxLine></RiLoginBoxLine>
              Salir
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
