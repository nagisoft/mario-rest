import MapSection from "../components/map";

const location = {
  address: "2160 E El Segundo Blvd, El Segundo, CA 90245",
  lat: 33.91661471307776,
  lng: -118.38836035528993,
};

const Contact = () => {
  return (
    <div>
      {/* Content */}
      <div>
        <MapSection location={location} zoomLevel={17} />
        <div className="lg:grid lg:grid-cols-2">
          <div className="col-span-1 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-600">
              Mario <br />
              Italian Restaurant
            </p>
            <p className="text-xl font-light text-gray-500">
              2160 E El Segundo Blvd, El Segundo,<br /> CA 90245, United States
            </p>
            <p className="text-xl font-light text-gray-500">
              Phone:  (+1) 31089354941
            </p>
            <p className="text-xl font-light text-gray-500">
              Email: info@mariosexample.com
            </p>
          </div>
          <div className="col-span-1 bg-gray-100 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-600">MAIN CHEF</p>
            <p className="text-xl font-light text-gray-500">
              Mario Filip
              <br /> Open for lunch and dinner, Mario is a restaurant in LA that 
              brings a breath of fresh air to the city s fine dining scene. 
              Mario is chic, laid-back, and intimate, making it one of the best restaurants 
              in LA. 
              Above all, we are totally serious about Italian food.
            </p>
            <p className="text-xl font-light text-gray-500">
             
              <br /> Phone: (+1) 100 2045, Fax: (+1) 212 7410 <br />
              Email: mario.filip@marioexample.com
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  space-y-4 py-24">
          <p className="text-3xl text-center font-light text-gray-600">
           FOR ALL BOOKINGS OR ANY INFORMATION <br />
            PLEASE FILL IN THE FORM BELLOW : 
          </p>
          <div className=" container mx-auto px-16 lg:grid  lg:grid-cols-2 lg:grid-rows-3   w-full">
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="text-gray-900  block w-full p-2.5 "
                placeholder="name@exmaple.com"
                required
              />
            </div>
            <div className="col-span-1 row-span-3 p-4  border">
              <label forHtml="message" className="block mb-2  text-gray-900 ">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-gray-900  "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className=" text-gray-900 "
                placeholder="John Doe"
                required
              />
            </div>
          </div>
          <button
            type="button"
            className=" text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
};
export default Contact;
