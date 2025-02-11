type JobsDataProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  posted: string;
  tags: string[];
};

export const jobs: JobsDataProps[] = [
  {
    id: 1,
    title: "UX Designer",
    company: "Dropbox",
    location: "Warszawa",
    salary: "8.8 - 13k PLN",
    posted: "Hace 2 días",
    tags: ["Remoto", "Sketch"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Google",
    location: "California",
    salary: "$80k - $120k",
    posted: "Hace 1 día",
    tags: ["Remoto", "React"],
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Amazon",
    location: "Seattle",
    salary: "$90k - $130k",
    posted: "Hace 3 días",
    tags: ["Node.js", "AWS"],
  },
];
