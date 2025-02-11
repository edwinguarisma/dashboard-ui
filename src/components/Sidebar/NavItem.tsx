import { NavItemsProps } from "../../types";

export const NavItem = ({ icon, text, href }: NavItemsProps) => {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-4 hover:bg-teal-600 p-4 text-gray-400 font-semibold hover:text-white rounded-lg transition-colors"
      >
        {icon}
        {text}
      </a>
    </li>
  );
};
