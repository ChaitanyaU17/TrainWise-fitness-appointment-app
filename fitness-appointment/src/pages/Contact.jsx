import LazyLoad from "react-lazyload";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <LazyLoad>
        <img className="w-full md:max-w-[360px] object-cover" src={assets.contact} alt="" />
        </LazyLoad>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (212) 417-8899 <br /> Email: chaitanyaumbarkar2002@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">Careers at PRESCRIPTO</p>
          <p className="text-gray-500">Learn more about aur teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-[#f97000] transition-all duration-500"> <a href="https://www.linkedin.com/in/chaitanya-umbarkar-323470239">Explore Jobs</a></button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
