import Divider from "../Divider";
import Image from "next/image";
import Link from "next/link";

const Address = ({ className }) => {
  return (
    <div className={`flex flex-col items-start p-[10px] ${className}`}>
      <h3 className="footer-title">Address</h3>
      <div className="flex flex-col items-start gap-[15px]">
        <span className="text-left text-[#CDCDCD]">
          2nd floor, Harsha complex, 23rd Main, HSR Layout, Sector 2, Opposite Airtel Office, Bangalore-560102
        </span>
        <div className="flex flex-col items-start">
          <h3 className="footer-title sm:text-base">Phone</h3>
          <div className="text-sm text-[#CDCDCD]">+91 9930841244</div>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="footer-title sm:text-base">Email</h4>
          <span className="text-sm text-[#CDCDCD]">cx@glamplus.in</span>
        </div>
      </div>
    </div>
  );
};

const Links = ({ className }) => {
  return (
    <div className={`flex flex-col items-start p-[10px] ${className}`}>
      <h3 className="footer-title">Links</h3>
      <ul className="flex flex-col items-start gap-[10px] text-base text-[#CDCDCD]">
        <li>
          <Link href="https://marketplace.glamplus.in">Products</Link>
        </li>
        <li>
          <Link href="/#features">Features</Link>
        </li>
        <li>
          <Link href="/pricing.html">Pricing</Link>
        </li>
        <li>
          <Link href="/about.html">About</Link>
        </li>
      </ul>
    </div>
  );
};

const Legal = ({ className }) => {
  return (
    <div className={`flex flex-col items-start p-[10px] ${className}`}>
      <h3 className="footer-title">Legal</h3>
      <ul className="flex flex-col items-start gap-[10px] text-base text-[#CDCDCD]">
        <li>
          <a href="https://s3.ap-south-1.amazonaws.com/website.attachment/Privacy_Policy.pdf">Privacy Policy</a>
        </li>
        <li>
          <a href="https://s3.ap-south-1.amazonaws.com/website.attachment/Refund_and_Cancellation.pdf">Refund Policy</a>
        </li>
        <li>
          <a href="https://s3.ap-south-1.amazonaws.com/website.attachment/Terms_and_Conditions.pdf">
            Terms and Conditions
          </a>
        </li>
      </ul>
    </div>
  );
};

const FollowUsOn = ({ className }) => {
  return (
    <div className={`flex flex-col items-start p-[10px] ${className}`}>
      <h3 className="footer-title">Follow us on</h3>
      <ul className="grid grid-row grid-cols-4 justify-items-center gap-[30px]">
        <li className="flex flex-col items-center">
          <a href="https://www.instagram.com/glamplusofficial/" target="_blank" rel="noreferrer">
            <Image src="/icons/instagram-240.svg" width={50} height={50} alt="Instagram icon" />
          </a>
        </li>
        <li className="flex flex-col items-center">
          <a href="https://www.facebook.com/glamplus2/" target="_blank" rel="noreferrer">
            <Image src="/icons/facebook-240.svg" width={50} height={50} alt="Facebook icon" />
          </a>
        </li>
        <li className="flex flex-col items-center">
          <a href="https://www.linkedin.com/company/glamplus/mycompany/" target="_blank" rel="noreferrer">
            <Image src="/icons/linkedin-240.svg" width={50} height={50} alt="Iinkedin icon" />
          </a>
        </li>
        <li className="flex flex-col items-center">
          <a href="https://twitter.com/glamplus20" target="_blank" rel="noreferrer">
            <Image src="/icons/twitter-240.svg" width={50} height={50} alt="Twitter icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default function Footer({ className }) {
  return (
    <div className={`w-full overflow-hidden bg-black p-[10px] md:p-[30px] ${className}`}>
      {/* top section */}
      <div className="flex flex-col w-full m-auto max-w-[1500px] text-white px-[10px] py-[20px] sm:p-[30px]">
        {/* address links legal social */}
        <div className="flex flex-col-reverse xl:flex-row gap-[50px]  items-start md:justify-between">
          <Address className="w-full xl:w-[30%] max-w-[300px]" />
          <div className="w-full xl:w-[70%] grid sm:grid-row grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[70px] lg:gap-[50px]">
            <div className="flex flex-row gap-[50px] sm:gap-[100px] lg-gap[10px] lg:justify-between ">
              <Links />
              <Legal />
            </div>
            <div className="w-full flex flex-row justify-start lg:justify-end ">
              <FollowUsOn />
            </div>
          </div>
        </div>
      </div>
      <Divider className="bg-white" />
      {/* bottom copyright */}
      <div className="flex justify-center items-center mt-[10px] p-[20px]">
        <span className="text-[#5B5B5B] text-center">2022 ?? RDV Design Technologies Pvt. Ltd.</span>
      </div>
    </div>
  );
}
