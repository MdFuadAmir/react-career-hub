import "../../../src/CssBtn.css";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Job = ({ jobb }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = jobb;
  return (
    <div className="card card-compact bg-white border-2 border-[#E8E8E8] rounded-lg p-10 text-left">
      <figure >
      </figure>
        <img className="text-left h-10 w-fit" src={logo} alt="Company Logo" />
      <div className="mt-10">
        <h2 className="text-2xl text-[#474747] font-extrabold">{job_title}</h2>
        <h2 className="text-xl mt-2 text-[#757575] font-semibold">
          {company_name}
        </h2>
        <div className="my-4">
          <button className="text-[#7E90FE] text-base mr-4 px-5 py-2 font-extrabold border rounded border-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="text-[#7E90FE] text-base px-5 py-2 font-extrabold border rounded border-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="mb-6 flex ">
            <p className="mr-6 items-center text-xl font-semibold text-[#757575] flex"><span className="mr-2"><SlLocationPin className="h-6 w-6"></SlLocationPin></span>  {location}</p>
            <p className="mr-6 flex items-center text-xl font-semibold text-[#757575]"><span className="mr-2"><AiOutlineDollar className="h-6 w-6"></AiOutlineDollar></span>{salary}</p>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}>
          <button className="btn button">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Job.propTypes = {
    jobb: PropTypes.object.isRequired
}

export default Job;
