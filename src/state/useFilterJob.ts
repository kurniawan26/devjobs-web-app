import { create } from 'zustand'
import dataJson from '@/data/data.json';

interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

interface FilterJobState {
  job: Job[];
  search: string;
  location: string;
  fullTime: boolean;
  setSearch: (search: string) => void;
  setLocation: (location: string) => void;
  setFullTime: (fullTime: boolean) => void;
  setJob: (job: Job[]) => void;
  filterJob: () => void;
}

const useFilterJobStore = create<FilterJobState>((set, get) => ({
  job: dataJson,
  search: '',
  location: '',
  fullTime: false,
  setSearch: (search) => set({ search }),
  setLocation: (location) => set({ location }),
  setFullTime: (fullTime) => set({ fullTime }),
  setJob: (job) => set({ job }),
  filterJob: () => {
    const { search, location, fullTime } = get();
    const filteredJob = dataJson.filter((job) => {
      const isFullTime = fullTime ? job.contract === 'Full Time' : true;
      const isLocationMatch = job.location.toLowerCase().includes(location.toLowerCase());
      const isSearchMatch = job.position.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase());
      return isFullTime && isLocationMatch && isSearchMatch;
    });
    set({ job: filteredJob });
  },
}));


export default useFilterJobStore;