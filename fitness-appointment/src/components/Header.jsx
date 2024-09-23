import { assets } from '../assets/assets';
import LazyLoad from 'react-lazyload';

const Header = () => {
  return (
    <LazyLoad offset={200} once>
      <div
        style={{
          backgroundImage: `url(${assets.heroimgone})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        className="flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 "
      >
        {/* -----left side ---- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#f97000] font-semibold leading-tight md:leading-tight lg:leading-tight">
            Book Online Training Sessions <br /> With Fitness Experts
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
            <LazyLoad height={100} offset={100} once>
              <img className="w-28" src={assets.group_profiles} alt="group profiles" />
            </LazyLoad>
            <p>
              Easily browse through our extensive list of certified fitness trainers and {" "}
              <br className="hidden sm:block" /> book your training sessions
              without any hassle.
            </p>
          </div>
          <a
            className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-100"
            href="#speciality"
          >
            Book Appointment{" "}
            <LazyLoad height={20} offset={100} once>
              <img className="w-3" src={assets.arrow_icon} alt="arrow icon" />
            </LazyLoad>
          </a>
        </div>
        {/* ---- right side --- */}
        <div className="md:w-1/2 relative">
          {/* You can add other images or content here */}
        </div>
      </div>
    </LazyLoad>
  );
}

export default Header;
