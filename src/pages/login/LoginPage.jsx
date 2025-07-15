import SignImg from '../../assets/images/svg/signImg.svg?react';
import SiteLogo from '../../assets/images/svg/siteLogo.svg?react';
// compoennts
import SignupForm from './_components/SignUpForm';

//react-ruter-dom
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="h-full">
      <div className="flex h-full lg:p-5">
        <div className="w-full  xl:w-[50%] flex items-center   flex-col  pt-[100px] lg:pl-[50px]">
          <div className="flex items-center xl:items-start flex-col w-[90%]">
            <SiteLogo className="mb-10 " />

            <p className="text-black text-[40px] xl:text-[86px] leading-[105px] font-bold mb-10">
              Get started
            </p>
            <SignupForm />

            <Link
              className="mt-4 text-[#8F8F8F] lg:w-[454px] block text-[26px] leading-[31px] text-center"
              to="/register"
            >
              Create a new account !
            </Link>
          </div>
        </div>
        <div
          className="hidden   xl
        :w-[50%]  xl:flex items-center justify-center flex-col h-full rounded-[40px] pb-[20px] bg-[#009688]"
        >
          <SignImg className="mb-[0px] w-[500px]" />
          <p className="font-inter text-white text-[36px] text-center w-[605px]  font-bold leading-[40px]">
            Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
