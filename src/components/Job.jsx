import {
  faCalendarDays,
  faCircleDollarToSlot,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useLoaderData} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import {addToDb, getShoppingCart} from "../utilities/fakedb";

const Job = () => {
  const {jobData} = useLoaderData();
  const {
    id,
    company_logo,
    job_title,
    company_name,
    location,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = jobData;

  const notify = () => toast.error("You have already applied!");
  const handleApply = (id) => {
    const appliedData = getShoppingCart();
    if (Object.keys(appliedData).length !== 0) {
      for (const appliedId in appliedData) {
        if (appliedId !== id) {
          addToDb(id);
        } else {
          notify();
        }
      }
    } else {
      addToDb(id);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto my-24 px-4">
      <Toaster />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <img
            className="mb-8 max-w-sm"
            src={company_logo}
            alt={company_name}
          />
          <div className="space-y-4">
            <p>
              <b>Job Description: </b> {job_description}
            </p>
            <p>
              <b>Job Responsibility: </b>
              {job_responsibility}
            </p>
            <p>
              <b>Educational Requirements: </b>
              {educational_requirements}
            </p>
            <p>
              <b>Experiences: </b>
              {experiences}
            </p>
          </div>
        </div>
        <div className="bg-blue-50 p-8 space-y-4">
          <div>
            <h3 className="font-bold text-2xl">{job_title}</h3>
            <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <p>
              <FontAwesomeIcon
                className="text-violet-600"
                icon={faCircleDollarToSlot}
              />
              <b> Salary: </b>
              {salary}
            </p>
            <p>
              <FontAwesomeIcon
                className="text-violet-600"
                icon={faCalendarDays}
              />
              <b> Job Title: </b>
              {job_title}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Contact Information</h3>
            <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <p>
              <FontAwesomeIcon className="text-violet-600" icon={faPhone} />
              <b> Phone: </b>
              {contact_information.phone}
            </p>
            <p>
              <FontAwesomeIcon className="text-violet-600" icon={faEnvelope} />
              <b> Email: </b>
              {contact_information.email}
            </p>
            <p>
              <FontAwesomeIcon
                className="text-violet-600"
                icon={faLocationDot}
              />
              <b> Address: </b>
              {location}
            </p>
          </div>
          <button
            onClick={() => handleApply(id)}
            type="button"
            className="w-full px-5 py-3 text-base font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
