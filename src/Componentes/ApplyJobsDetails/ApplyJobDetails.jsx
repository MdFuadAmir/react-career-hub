import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import PropTypes from 'prop-types';

const ApplyJobDetails = ({ appliedJOb }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = appliedJOb;
  return (
    <div className="p-7 flex flex-col md:flex-row card card-side bg-white border mb-6 rounded-lg">
      <figure className="mr-7 border px-10 py-20 bg-[#F4F4F4] rounded-lg">
        <img className="h-fit w-32" src={logo} alt="Applied Jobs" />
      </figure>
      <div>
        <h2 className="text-2xl  text-[#474747] font-extrabold">{job_title}</h2>
        <h2 className="text-xl mt-2 text-[#757575] font-semibold">
          {company_name}
        </h2>
        <div className="flex my-4">
          <button className="text-[#7E90FE] text-base mr-4 px-5 py-2 font-extrabold border rounded border-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="text-[#7E90FE] text-base px-5 py-2 font-extrabold border rounded border-[#7E90FE]">
            {job_type}
          </button>
          </div>
        <div className="mb-6 flex">
            <p className="mr-6 items-center text-xl font-semibold text-[#757575] flex"><span className="mr-2"><SlLocationPin className="h-6 w-6"></SlLocationPin></span>  {location}</p>
            <p className="mr-6 flex items-center text-xl font-semibold text-[#757575]"><span className="mr-2"><AiOutlineDollar className="h-6 w-6"></AiOutlineDollar></span>{salary}</p>
        </div>
        <div>
            <button className="btn button">View Details</button>
        </div>
      </div>
    </div>
  );
};
ApplyJobDetails.propTypes ={
    appliedJOb: PropTypes.object.isRequired
}

export default ApplyJobDetails;
