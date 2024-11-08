import { useLoaderData } from "react-router-dom";
import "../../../src/CssBtn.css";
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../Utility/localStore";
import ApplyJobDetails from "../ApplyJobsDetails/ApplyJobDetails";
import { IoIosArrowDown } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsidesJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsidesJobs);
    }
  };

  return (
    <div>
      <Helmet>
      <title>Career hub | ApplyedJobs</title>
      </Helmet>
      <div className="detailBackImage w-full h-32 p-10 mt-8 mb-40">
        <h1 className="text-3xl font-extrabold text-center">Applied Jobs</h1>
      </div>

      <div className="text-end my-4">
        <details className="dropdown">
          <summary className="m-1 btn">Filter <IoIosArrowDown></IoIosArrowDown></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>

      <div>
        {displayJobs.map((appliedJOb) => (
          <li type="none" key={appliedJOb.id}>
            <ApplyJobDetails appliedJOb={appliedJOb}></ApplyJobDetails>
          </li>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
