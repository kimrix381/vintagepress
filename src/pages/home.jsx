import whoarewe from "../assets/whoarewe.jpg"; // ✅ correct path to image
const Home = () => (
  <div className=" flex-col inline-block ">
    <div>
      <img src={whoarewe} alt="Loading" className="h-90   w-screen " />
    </div>
    <div className="rounded-full bg-radial-[at_50%_75%] from-indigo-300 via-white to-white to-90% h-screen w-screen  items-center justify-center ml-5">
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
      <div className=" bg-black h-10 w-screen -ml-5 mt-10 ">
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
export default Home;
