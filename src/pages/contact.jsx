import contact from "../assets/contact.jpg";
import marble from "../assets/marble.avif";
const Contact = () => (
  <div
    className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
    style={{ backgroundImage: `url(${marble})` }}
  >
    <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg w-full max-w-md h-[500px] text-2xl  flex flex-col justify-between font-bold">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-6 rounded-t-2xl">
        <h2 className="text-2xl font-bold">CONTACT US</h2>
      </div>

      <div className="p-6 space-y-13 text-gray-800">
        <div className="flex items-start gap-3">
          <i className="bx bx-phone-call text-3xl text-blue-700 mt-1"></i>
          <div>
            <p>+254 716 112800</p>
            <p>+254 704 646087</p>
            <p>+254 780 112800</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <i className="bx bx-globe text-3xl text-blue-700"></i>
          <p>www.vintagepress.co.ke</p>
        </div>

        <div className="flex items-center gap-3">
          <i className="bx bx-envelope text-3xl text-blue-700"></i>
          <p>vintagepress2016@gmail.com</p>
        </div>

        <div className="flex items-center gap-3">
          <i className="bx bx-map text-3xl text-blue-700"></i>
          <p>Nakuru / Nairobi</p>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
