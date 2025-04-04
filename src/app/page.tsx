'use client';
import JobCard from "@/components/Pages/HomePage/JobCard";
import ModalFilter from "@/components/Pages/HomePage/ModalFilter";
import SearchBar from "@/components/Pages/HomePage/SearchBar";
import useFilterJobStore from "@/state/useFilterJob";
import { useEffect } from "react";

export default function Home() {
  const { job: dataJob } = useFilterJobStore();

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }, []);

  return (
    <>
      <SearchBar />
      <div className="grid gap-16 mt-8 md:mt-28 sm:gap-x-4 sm:gap-y2 sm:grid-cols-2 md:grid-cols-3">
        {dataJob.map(job => {
          return <JobCard key={job.id} {...job} />
        })}
      </div>
      <ModalFilter />
    </>
  );
}
