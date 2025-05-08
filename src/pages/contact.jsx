import contact from "../assets/contact.jpg";
import marble from "../assets/marble.avif";

const Contact = () => (
  <div
    className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 sm:p-6"
    style={{ backgroundImage: `url(${marble})` }}
  >
    <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-4 sm:py-6 rounded-t-2xl">
        <h2 className="text-xl sm:text-2xl font-bold">CONTACT US</h2>
      </div>

      <div className="p-4 sm:p-6 space-y-6 sm:space-y-10 text-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
          <i className="bx bx-phone-call text-2xl sm:text-3xl text-blue-700"></i>
          <div>
            <p>+254 716 112800</p>
            <p>+254 704 646087</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <i className="bx bxl-whatsapp text-2xl sm:text-3xl text-blue-700"></i>
          <a
            className="hover:text-green-500 transition"
            href="https://wa.me/qr/FALBUJBWWUHQO1"
          >
            Chat with me on WhatsApp
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <i className="bx bx-globe text-2xl sm:text-3xl text-blue-700"></i>
          <p>www.vintagepress.co.ke</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <i className="bx bx-envelope text-2xl sm:text-3xl text-blue-700"></i>
          <p>vintagepress2016@gmail.com</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <i className="bx bx-map text-2xl sm:text-3xl text-blue-700"></i>
          <p>Nakuru / Nairobi</p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
