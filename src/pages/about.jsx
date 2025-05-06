import network from "../assets/network.avif";
import thinklab from "../assets/thinklab.png";
import bird from "../assets/bird.png";
import robo from "../assets/robo.png";
import ai from "../assets/ai.png";
import graphic from "../assets/graphic.png";
const About = () => (
  <div className="bg-white text-gray-800 font-sans">
    {/* Header Section with Overlayed Title */}
    <div className="relative bg-gradient-to-r from-blue-800 to-blue-400 h-40 flex items-center  justify-start  w-screen  ">
      <div>
        <img src={network} alt="Loading" className="h-45   w-screen " />
      </div>
      <div className="absolute -bottom-8 bg-black px-6 py-2 rounded shadow-lg ml-5">
        <h1 className="text-white text-3xl italic font-bold">Our Charisma</h1>
      </div>
    </div>

    <div className="px-6 pt-16 pb-10 max-w-4xl mx-auto">
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
          OUR Mission
        </h2>
        <ul className="space-y-4 ">
          <li>
            -To deliver top-tier printing and branding services that exceed our
            clients' expectations.
          </li>
          <li>
            -We are committed to innovation, sustain ability,customer
            satisfaction and creativity.
          </li>
          <li>
            -Our mission is to bring your vision to life through exceptional
            print and branding solutions.
          </li>
        </ul>
      </section>
    </div>
    <div className=" bg-black h-10 w-screen -ml-5 mt-10 flex-start mb-10 ">
      <p className="text-white text-center text-lg font-semibold ">
        <ol className="flex gap-[300px] text-center justify-center items-center">
          {" "}
          <li>01 </li> <li> +254 716 112800/ +254 704 646087 </li>{" "}
          <li> Vintagepress2016@gmail.com </li>{" "}
        </ol>
      </p>
    </div>

    <div>
      <img src={thinklab} alt="Loading" className="h-70   w-screen " />
      <img src={bird} alt="Loading" className="h-200  w-screen " />
      <p className="text-lg font-semibold text-center mb-6">
        <span className="font-bold">
          Vintage Printing Press is one of the most professional indigenously
          owned printing & Branding Company in the region, specializing in
          professional, high quality branding and printing.{" "}
        </span>
      </p>
      <div className=" bg-black h-10 w-screen -ml-5 mt-10 flex-start mb-10 ">
        <p className="text-white text-center text-lg font-semibold ">
          <ol className="flex gap-[300px] text-center justify-center items-center">
            {" "}
            <li>01 </li> <li> +254 716 112800/ +254 704 646087 </li>{" "}
            <li> Vintagepress2016@gmail.com </li>{" "}
          </ol>
        </p>
      </div>
    </div>
  </div>
);
export default About;
