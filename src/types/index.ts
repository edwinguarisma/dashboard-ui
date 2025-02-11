import React from "react";

export type NavItemsProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
};

export type JobsDataProps = {
  id: number;
  icon: React.ReactNode;
  job: string;
  company: string;
  city: string;
  heref: string;
};
