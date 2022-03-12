import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import Image1 from "../public/pexels-gary-barnes-6248866.jpg";
import Image2 from "../public/pexels-gary-barnes-6248885.jpg";
import Image3 from "../public/pexels-jacob-moseholt-4015403.jpg";
import Image4 from "../public/pexels-alex-favali-921362.jpg";
import Image5 from "../public/pexels-pixelme-stock-photography-2773940.jpg";
const Contents = () => {
  return (
    <div className="container mx-auto py-24  space-y-20 w-full">
      <div className=" lg:flex lg:flex-row justify-center px-12">
        <div>
          <Image src={Image1} alt="Picture of the author" />
        </div>
        <div className="mt-12">
          <Image src={Image2} alt="Picture of the author" />
        </div>
      </div>
      <div className="px-12 flex flex-col justify-center items-center text-center space-y-6">
        <FaHashtag className="w-12 h-12 text-amber-600  p-1" />
        <p className="text-3xl font-light text-gray-600">
         Our chefs headed by Chef Linguini cook with love with the freshest and highest quality ingredients mostly from our farm.


          <br />
          Come and taste our fantastic cuisine!
        </p>
        <p className="text-xl text-gray-500">Mario Filip- Main Chef</p>
      </div>
      <div className="lg:grid lg:grid-cols-2 px-12">
        <div className="col-span-1 space-y-6 py-12 text-center px-8">
          <p className="text-3xl font-medium text-gray-600">
            Great Food, even Greater Service
          </p>
          <p className="text-2xl font-light text-gray-500">
            Take your sauce with bread-crumbs, and pour in salted water, and put one-quarter the fire. The special recipes for seven or fold up again for five potatoes, turn brownish, and serve it an hour.
          </p>
          <button
            type="button"
            className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            BOOK A TABLE
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-2">
            <Image src={Image3} alt="Picture of the author" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={Image4} alt="Picture of the author" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={Image5} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contents;
