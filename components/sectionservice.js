import { FaHands, FaHeadSideMask, FaApplePay, FaTabletAlt } from "react-icons/fa";
const Service = () => {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-12 items-center place-content-center justify-center">
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaHeadSideMask className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Safety First</p>
        <p className="text-gray-600">
          Our Places is complient with the Covid-19 Compliances and Safety Measures
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaHands className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Quality Food</p>
        <p className="text-gray-600">
         Experienced staff and professionally trained chefs
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaApplePay className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Payment Facilities</p>
        <p className="text-gray-600">
          Different Range of payment options for Dining in or Ordering
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaTabletAlt className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Technological Service</p>
        <p className="text-gray-600">
          Our tables have each an iPad to order food from, making it easier and more efficient
        </p>
      </div>
    </div>
  );
};
export default Service;
