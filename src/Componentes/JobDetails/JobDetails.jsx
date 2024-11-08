import { useLoaderData, useParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import "../../../src/CssBtn.css";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStore";
import { Helmet } from "react-helmet-async";


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
    salary,
    job_title
  } = job;

  const handleApplyJob = () =>{
    saveJobApplication(idInt);
    toast ('You have apply successfully');
  }
  return (
    <div>
      <Helmet>
      <title>Career hub | JobDetails</title>
      </Helmet>
      <div>
      </div>
        <div className="detailBackImage p-10 mt-8  w-full h-28 items-center text-center">
            <h1 className="text-4xl font-extrabold">Job Details</h1>
        </div>
        
      <div className="gap-6 grid md:grid-cols-3 my-24">
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
          <AiOutlineDollarCircle className=" text-[#9873Ff]"></AiOutlineDollarCircle>
          <p className="text-[#474747] font-extrabold">Sallary: </p>
          <p className="text-[#757575] font-medium"> {salary}</p>
          </div>
          <div className=" flex items-center gap-2">
          <FaCalendarAlt className=" text-[#9873Ff]"></FaCalendarAlt>
          <p className="text-[#474747] font-extrabold">Job Title: </p>
          <p className="text-[#757575] font-medium"> {job_title}</p>
          </div>
          <h2 className="mt-8 mb-6 font-extrabold text-xl">Contact Information</h2> <hr />
          <div className=" mt-6 flex items-center gap-2">
          <FaPhoneVolume className=" text-[#9873Ff]"></FaPhoneVolume>
          <p className="text-[#474747] font-extrabold">Phone: </p>
          <p className="text-[#757575] font-medium"> {contact_information.phone}</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
          <MdOutlineMailOutline className=" text-[#9873Ff]"></MdOutlineMailOutline>
          <p className="text-[#474747] font-extrabold">Email: </p>
          <p className="text-[#757575] font-medium"> {contact_information.email}</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
          <IoLocationSharp className="h-6 w-6 text-[#9873Ff]"></IoLocationSharp>
          <p className="text-[#474747] font-extrabold">Address: </p>
          <p className="text-[#757575] font-medium"> {contact_information.address}</p>
          </div>
        </div>
        <button onClick={handleApplyJob} className="text-center w-full button p-3 rounded-lg mt-6">Apply Now</button>
        </div>  
        <ToastContainer></ToastContainer>   
    </div>
    </div>
  );
};

export default JobDetails;
