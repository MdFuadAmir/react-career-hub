import { useLoaderData, useParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import "../../../src/CssBtn.css";
import { AiOutlineDollarCircle } from "react-icons/ai";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    phone,
    email,
    address,
    salary,
    job_title
  } = job;
  return (
    <div>
      <h1 className="text-[#1A1919] text-3xl font-extrabold text-center">
        Job Details
      </h1>
      <div className="gap-6 grid md:grid-cols-3">
        {/*  */}
        <div className="p-2 text-[#757575] md:col-span-2">
          <p className="mb-6">
            <span className="font-bold text-[#1A1919]">Job Description: </span>
            {job_description}
          </p>
          <p>
            <span className="font-bold text-[#1A1919]">
              Job Responsibility:{" "}
            </span>
            {job_responsibility}
          </p>
          <p className="text-[#1A1919] mt-6 mb-4 font-bold">
            Educational Requirements:
          </p>
          <p>{educational_requirements}</p>
          <p className="mt-6 mb-4 font-bold text-[#1A1919]">Experiences:</p>
          <p>{experiences}</p>
        </div>
        {/*  */}
        <div>
        <div className=" details rounded p-7 md:col-span-1">
          <h2 className="text-xl text-[]1A1919] font-extrabold mb-6">
            Job Details
          </h2>
          <hr />
          <div className=" mt-6 mb-4 flex items-center gap-2">
          <AiOutlineDollarCircle className="text-[#9873Ff]"></AiOutlineDollarCircle>
          <p className="text-[#474747] font-extrabold">Sallary: </p>
          <p className="text-[#757575] font-medium"> {salary}</p>
          </div>
          <div className=" flex items-center gap-2">
          <FaCalendarAlt className=" text-[#9873Ff]"></FaCalendarAlt>
          <p className="text-[#474747] font-extrabold">Job Title: </p>
          <p className="text-[#757575] font-medium"> {salary}</p>
          </div>
          <h2 className="mt-8 mb-6 font-extrabold text-xl">Contact Information</h2>
        </div>
        <button className="text-center w-full button p-3 rounded-lg mt-6">Apply Now</button>
        </div>
        
        
      </div>
    </div>
  );
};

export default JobDetails;
