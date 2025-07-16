import SignImg from "../../assets/images/svg/signImg.svg?react";
import SiteLogo from "../../assets/images/svg/siteLogo.svg?react";
// compoennts
import SignupForm from "./_components/SignUpForm";

//react-ruter-dom
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="h-full">
      <div className="flex h-full lg:p-5">
        <div className="flex w-full flex-col items-center pt-[100px] lg:pl-[50px] xl:w-[50%]">
          <div className="flex w-[90%] flex-col items-center xl:items-start">
            <SiteLogo className="mb-10" />

            <p className="mb-10 text-[40px] leading-[105px] font-bold text-black xl:text-[86px]">
              Get started
            </p>
            <SignupForm />

            <Link
              className="mt-4 block text-center text-[26px] leading-[31px] text-[#8F8F8F] lg:w-[454px]"
              to="/register"
            >
              Create a new account !
            </Link>
            <Link to={"/"}>home</Link>
          </div>
        </div>
        <div className="hidden h-full flex-col items-center justify-center rounded-[40px] bg-[#009688] pb-[20px] xl:flex xl:w-[50%]">
          <SignImg className="mb-[0px] w-[500px]" />
          <p className="font-inter w-[605px] text-center text-[36px] leading-[40px] font-bold text-white">
            Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
