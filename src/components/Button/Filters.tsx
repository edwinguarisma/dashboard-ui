import { RiCloseFill } from "react-icons/ri";

type FiltersProps = {
    text: string
}

export const Filters = ({text}: FiltersProps) => {
  return (
    <div className="mt-6 flex grid-cols-1">
      <span className="bg-white py-2 px-4 rounded-2xl flex gap-4 items-center shadow text-gray-600">
        <button className="bg-teal-100 py-[2px] px-[2px] rounded-full  hover:bg-teal-600 transition-colors">
          <RiCloseFill className="text-teal-400 cursor-pointer font-bold"></RiCloseFill>
        </button>
        {text}
      </span>
    </div>
  );
};
