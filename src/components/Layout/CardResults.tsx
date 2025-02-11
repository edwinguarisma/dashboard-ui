import { RiDropboxFill } from "react-icons/ri";

type CardResultsProps = {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    posted: string;
    tags: string[];
  };
};

export const CardResults = ({ job }: CardResultsProps) => {
  const primary = "bg-teal-200 text-teal-600";
  const secundary = "bg-purple-200 text-purple-600";
  return (
    <a
      href="#"
      className="w-full bg-white p-8 rounded-2xl drop-shadow-lg flex justify-between items-center flex-wrap cursor-pointer border border-gray-100 hover:border hover:border-teal-400 transition-colors overflow-hidden"
    >
      <div className="flex items-center gap-4 md:gap-12 flex-col md:flex-row w-full md:w-auto">
        <div className=" bg-teal-100 p-4 rounded-[5px]">
          <RiDropboxFill className="text-5xl text-teal-600"></RiDropboxFill>
        </div>

        <div className="">
          <div className="flex gap-4 items-center mb-3 flex-col md:flex-row">
            <h1 className="text-2xl text-gray-800">{job.title}</h1>
            <div className="flex gap-2">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`${
                    index % 2 === 0 ? primary : secundary
                  } px-2 py-1 text-xs font-semibold rounded-[5px]`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4 text-gray-600 justify-center md:justify-start">
            <p>{job.company}</p>
            <p>----</p>
            <p>{job.location}</p>
          </div>
        </div>
      </div>

      <div className="text-gray-600 w-full md:w-auto text-center">
        <h3 className="text-2xl font-semibold mb-3">{job.salary}</h3>
        <p className="md:text-end">{job.posted}</p>
      </div>
    </a>
  );
};
