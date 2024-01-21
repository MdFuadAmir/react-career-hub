import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
//   this is not the best way to load show all data
const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const [isOpen, setIsOpen] =useState(false);
  return (
    <div className="text-center my-36">
      <h2 className="text-5xl font-extrabold text-[#1A1919]">Featured Jobs</h2>
      <p className="mt-4 text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">
        {jobs.slice(0, dataLength).map((jobb) => (
          <Job key={jobb.id} jobb={jobb}></Job>
        ))}
      </div>
      <div  className={dataLength === jobs.length}>
      <button className="button btn mt-10" 
      onClick={() => {
        setDataLength(jobs.length);
        setIsOpen(!isOpen)
        }}>
        {isOpen ? 'See Less' : 'See All Jobs'}
      </button>
      </div>
    </div>
  );
};

export default Featured;
