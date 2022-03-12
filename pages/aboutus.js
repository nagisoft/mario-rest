import Image from "next/image";
import Image1 from "../public/chef.jpg";
import { FaCheck, FaMale, FaGlobe } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div>
      {/* Content */}
      <div>
        <div
          className="bg-no-repeat bg-cover bg-center  h-72"
          style={{
            backgroundImage: `url(/rest.jpg)`,
          }}
        >
          <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
            <p className="text-white text-5xl font-light  p-8">About Us</p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <p className="text-xl font-medium">
              For over a dozen years we have been providing the best Italian Food in the LA Area. 
              We offer a wide range of Authentic Italian Foods.
            </p>
            <p className="text-gray-500">
             A certain energy and so much passion have been brought together to create and give birth to Mario. Both stylish and relaxed, calm and lively, intimate and welcoming… this place deserved food that resembles it: simple and flavoursome.
Perfect cooking time, seasonal produce…
            </p>
            <div className="space-y-3 text-gray-500">
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>Professionally Trained Chefs</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>Sanitary Compliance and Safety Measures</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>HomeMade Food</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image src={Image1} alt="Picture of the author" />
          </div>
        </div>
        
        
      </div>
      {/* End of Content */}
    </div>
  );
};
export default AboutUs;
