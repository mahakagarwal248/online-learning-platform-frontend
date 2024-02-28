import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from "./Footer/Footer";
import Auth from "./Screens/Login/index";
import About from "./Sections/About";
import Categories from "./Sections/Categories";
import Courses from "./Sections/Courses";
import FAQs from "./Sections/FAQs";
import Features from "./Sections/Features";
import Top from "./Sections/Top";
import ForgotPassword from "./Screens/ForgotPassword";
import ChangePassword from "./Screens/ForgotPassword/ChangePassword";
import Otp from "./Screens/ForgotPassword/otp";
import { useSelector } from "react-redux";

function Home() {
  const BlankComp = "";
  const stepComp = {
    0: BlankComp,
    1: Auth,
    2: ForgotPassword,
    3: Otp,
    4: ChangePassword,
  };

  const step = useSelector((data) => data.web.modalStep);
  const Step = stepComp[step];
  return (
    <div>
      {step !== 0 ? <Step /> : ""}

      <Top />
      <AnimationOnScroll animateIn="animate__bounceInLeft">
        <Features />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceInRight">
        <About />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__pulse">
        <Categories />
      </AnimationOnScroll>
      <Courses />
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <FAQs />
      </AnimationOnScroll>
      <Footer />
    </div>
  );
}

export default Home;
