import Brand from "../components/landingPage/Brand";
import Customers from "../components/landingPage/Customers";
import Experience from "../components/landingPage/Experience";
import Grow from "../components/landingPage/Grow";
import Learn from "../components/landingPage/Learn";
import Main from "../components/landingPage/Main";
import Solution from "../components/landingPage/Manage";
import Services from "../components/Services"

export default function Home() {
  return (
    <div className="font-poppins">
      <Main />
      <Brand />
      <Solution />
      <Experience />
      <Grow />
      <Services/>
      <Customers />
      <Learn />
    </div>
  );
}
