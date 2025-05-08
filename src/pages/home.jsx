import whoarewe2 from "../assets/whoarewe2.jpg";
import whitelogo from "../assets/whitelogo.jpg";
import network from "../assets/network.avif";

const Home = () => (
  <div className="flex flex-col items-center w-full overflow-x-hidden">
    {/* Top Images Section */}
    <div className="flex flex-col md:flex-row w-full">
      <img
        src={whoarewe2}
        alt="Who We Are"
        className="w-full md:w-full h-auto object-cover "
      />
    </div>

    {/* Heading Overlay */}
    <div className="relative w-full">
      <div className="absolute -bottom-8 bg-black px-4 sm:px-6 py-2 rounded shadow-lg ml-5">
        <h1 className="text-white text-2xl sm:text-3xl italic font-bold">
          Our Charisma
        </h1>
      </div>
    </div>

    {/* Main Content Container */}
    <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-8 py-8">
      <section className="mb-10">
        <p className="text-lg font-semibold text-center mb-6">
          <span className="font-bold">At Vintage Printing Press,</span> we are
          the masters of all things print. Based in Nakuru & Nairobi, we offer
          an expansive range of printing services that cater to every need.
        </p>

        <div className="space-y-2 text-base">
          <p>
            <span className="font-bold text-blue-900">General Printing:</span>{" "}
            From business cards to flyers, we've got you covered.
          </p>
          <p>
            <span className="font-bold text-blue-900">
              Paper Works & Materials:
            </span>{" "}
            High-quality paper products tailored to your specifications.
          </p>
          <p>
            <span className="font-bold text-blue-900">
              Branding & Corporate Branding:
            </span>{" "}
            Making your brand stand out with bespoke designs.
          </p>
          <p>
            <span className="font-bold text-blue-900">
              Exercise Book Printing:
            </span>{" "}
            Top-notch printing services for educational materials.
          </p>
          <p>
            Whatever your printing needs, Vintage Printing Press delivers with
            precision and excellence.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold bg-blue-500 text-white inline-block px-4 py-1 rounded mb-4">
          Why Choose Us?
        </h2>
        <p className="mb-6">
          With a commitment to quality and a passion for perfection, Vintage
          Printing Press ensures that every project is handled with the utmost
          care. Our dedicated team is here to help you make a lasting impression
          with the below items mentioned.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-pink-700 font-bold tracking-wide">
          <ul className="space-y-1">
            <li>- EXERCISE BOOKS</li>
            <li>- RECEIPT BOOKS</li>
            <li>- NOTE BOOKS</li>
            <li>- CUSTOM ENVELOPES</li>
            <li>- HYMN BOOKS</li>
            <li>- INVITATION CARDS</li>
            <li>- BUSINESS CARDS</li>
            <li>- CALENDARS</li>
          </ul>
          <ul className="space-y-1">
            <li>- MAGAZINES</li>
            <li>- OFFICE FILES</li>
            <li>- DIARY BRANDING</li>
            <li>- OFFICE BRANDING</li>
            <li>- VEHICLE BRANDING</li>
            <li>- SIGN BOARDS</li>
            <li>- PICTURE MOUNTING</li>
            <li>- WATER BOTTLES BRANDING</li>
          </ul>
          <ul className="space-y-1">
            <li>- WHEEL COVERS</li>
            <li>- ROLLUP BANNERS</li>
            <li>- TEAR DROPS</li>
            <li>- FLAG BANNERS</li>
            <li>- BANNERS</li>
            <li>- STICKERS</li>
            <li>- HOODS BRANDING</li>
            <li>- SHIRTS BRANDING</li>
          </ul>
        </div>

        <p className="mt-8 italic text-red-600 font-semibold text-center text-lg">
          Ready to start your next printing project? Contact us today, and let's
          make it happen!
        </p>
      </section>

      {/* Core Values */}
      <section className="mb-10">
        <h2 className="bg-sky-600 text-white inline-block px-4 py-1 rounded font-bold text-lg mb-4">
          OUR CORE VALUES
        </h2>
        <ul className="space-y-4">
          <li>
            <strong>Quality:</strong> We prioritize excellence in every print
            and branding project we undertake, ensuring superior outcomes that
            exceed expectations.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace the latest technologies and
            creative approaches to deliver cutting-edge printing and branding
            solutions.
          </li>
          <li>
            <strong>Customer Satisfaction:</strong> We are committed to
            providing exceptional service, always putting our clients' needs and
            satisfaction at the forefront.
          </li>
          <li>
            <strong>Sustainability:</strong> We operate in an environmentally
            responsible manner, minimizing our footprint through sustainable
            practices.
          </li>
          <li>
            <strong>Teamwork:</strong> We value collaboration and teamwork,
            recognizing that our collective efforts drive our success.
          </li>
          <li>
            <strong>Integrity:</strong> We conduct our business with honesty,
            transparency, and a strong ethical foundation.
          </li>
        </ul>
      </section>

      {/* Vision */}
      <section className="mb-10">
        <h2 className="bg-sky-600 text-white inline-block px-4 py-1 rounded font-bold text-lg mb-4">
          OUR VISION
        </h2>
        <ul className="space-y-4">
          <li>
            -To be the leading provider of innovative and high-quality printing
            and branding solutions in Nakuru and Nairobi.
          </li>
          <li>
            -Transforming every print into a masterpiece and every brand into an
            icon.
          </li>
          <li>
            -We aim to blend - Creativity, Technology, and excellence, ensuring
            every project, big or small, leaves a lasting impression.
          </li>
          <li>
            -To redefine the standards of printing and branding by delivering
            exceptional quality, creative solutions, and unparalleled customer
            service.
          </li>
          <li>
            -We strive to empower businesses and individuals through innovative
            print and branding services that turn ideas into impactful
            realities.
          </li>
        </ul>
      </section>

      {/* Mission */}
      <section>
        <h2 className="bg-sky-600 text-white inline-block px-4 py-1 rounded font-bold text-lg mb-4">
          OUR MISSION
        </h2>
        <ul className="space-y-4">
          <li>
            -To deliver top-tier printing and branding services that exceed our
            clients' expectations.
          </li>
          <li>
            -We are committed to innovation, sustainability, customer
            satisfaction and creativity.
          </li>
          <li>
            -Our mission is to bring your vision to life through exceptional
            print and branding solutions.
          </li>
        </ul>
      </section>

      {/* Contact Strip */}
      <div className="bg-black w-full py-4 mt-10">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white text-center text-base sm:text-lg font-semibold">
          <span>01</span>
          <span>+254 716 112800 / +254 704 646087</span>
          <span>Vintagepress2016@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
