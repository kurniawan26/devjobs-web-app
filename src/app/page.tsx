'use client';
import JobCard from "@/components/JobCard";
import SearchBar from "@/components/SearchBar";
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
      <div className="grid md:mt-28 mt-8 gap-16 sm:gap-x-4 sm:gap-y2 sm:grid-cols-2 md:grid-cols-3">
        {dataJob.map(job => {
          return <JobCard key={job.id} {...job} />
        })}
      </div>
    </>
  );
}
