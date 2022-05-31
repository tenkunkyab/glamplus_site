import Divider from "../Divider";
import Image from "next/image";

const Address = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center sm:items-start p-[10px] ${className}`}
    >
      <h3 className="footer-title">Address</h3>
      <div className="flex flex-col items-center sm:items-start gap-[15px]">
        <span className="text-center sm:text-left">
          2nd floor, Harsha complex, 23rd Main, HSR Layout, Sector 2, Opposite
          Airtel Office, Bangalore-560102
        </span>
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-base opacity-90">Phone</h3>
          <div className="text-sm opacity-80">+91 9930841244</div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-base opacity-90">Email</h4>
          <span className="text-sm opacity-80">support@glamplus.in</span>
        </div>
      </div>
    </div>
  );
};

const Links = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center sm:items-start p-[10px] ${className}`}
    >
      <h3 className="footer-title">Links</h3>
      <ul className="flex flex-col items-center sm:items-start gap-[10px] text-base opacity-80">
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About</li>
      </ul>
    </div>
  );
};

const Legal = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center sm:items-start p-[10px] ${className}`}
    >
      <h3 className="footer-title">Legal</h3>
      <ul className="flex flex-col items-center sm:items-start gap-[10px] text-base opacity-80">
        <li>Privacy Policy</li>
        <li>Refund Policy</li>
        <li>Terms and Conditions</li>
      </ul>
    </div>
  );
};

const FollowUsOn = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center sm:items-start p-[10px] ${className}`}
    >
      <h3 className="footer-title">Follow us on</h3>
      <ul className="grid grid-row grid-cols-4 justify-items-center gap-[30px]">
        <li className="flex flex-col items-center">
          <Image
            src="/icons/instagram-240.svg"
            width={50}
            height={50}
            alt="Instagram icon"
          />
        </li>
        <li className="flex flex-col items-center">
          <Image
            src="/icons/facebook-240.svg"
            width={50}
            height={50}
            alt="Facebook icon"
          />
        </li>
        <li className="flex flex-col items-center">
          <Image
            src="/icons/linkedin-240.svg"
            width={50}
            height={50}
            alt="Iinkedin icon"
          />
        </li>
        <li className="flex flex-col items-center">
          <Image
            src="/icons/twitter-240.svg"
            width={50}
            height={50}
            alt="Twitter icon"
          />
        </li>
      </ul>
    </div>
  );
};

export default function Footer({ className }) {
  return (
    <div
      className={`w-full overflow-hidden bg-black p-[10px] md:p-[30px] ${className}`}
    >
      {/* top section */}
      <div className="flex flex-col w-full m-auto max-w-[1500px] text-white px-[10px] py-[20px] sm:p-[30px]">
        {/* address links legal social */}
        <div className="flex flex-col-reverse xl:flex-row gap-[50px] items-center sm:items-start md:justify-between">
          <Address className="w-full xl:w-[30%] max-w-[300px]" />
          <div className="w-full xl:w-[70%] grid sm:grid-row grid-cols-1 lg:grid-cols-2 gap-[50px] md:gap-[50px] lg:gap-[50px]">
            <div className="flex flex-col sm:flex-row gap-[50px] sm:gap-[100px] lg-gap[10px] lg:justify-between ">
              <Links />
              <Legal />
            </div>
            <div className="w-full flex flex-row justify-center sm:justify-start lg:justify-end " >
              <FollowUsOn/>
            </div>
          </div>
        </div>
      </div>
      <Divider className="bg-white" />
      {/* bottom copyright */}
      <div className="flex justify-center items-center mt-[10px] p-[20px]">
        <span className="text-[#5B5B5B] text-center">
          2021 © RDV Design Technologies Pvt. Ltd.
        </span>
      </div>
    </div>
  );
}
