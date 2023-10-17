import Link from "next/link";
import Image from "~/components/Image";
import Icon from "~/components/Icon";
import { SignUp } from "@clerk/nextjs";
import { signInResources } from "~/itlText/signin";

const SignInPage = () => {
  return (
    <div className="bg-[#232627] min-h-screen-ios relative flex min-h-screen">
      <div className="flex flex-col grow justify-center items-center bg-[#232627]">
        <div className="md:p-0 md:bg-transparent bg-[#414141] p-12 z-2 rounded-xl">
          <div className="mb-8 w-full flex items-center justify-center">
            {/* <div className="h3 mb-4 text-n-1">Welcome to Symptom 360</div> */}
            <Image
              className="object-contain w-[80%]"
              src="/Logos/S360Logo.svg"
              height={95}
              width={300}
              alt=""
            />
          </div>
          
          <div className="flex justify-center items-center">
            <SignUp signInUrl={"/sign-in"} routing={"virtual"} />
          </div>
          <div className="body1 text-n-3">{signInResources.chat.English}</div>
        </div>
        
        <Image
          className="absolute md:hidden bottom-0 z-1 w-[90%]"
          src="/images/mountain.svg"
          height={750}
          width={1440}
          alt=""
        />
      </div>
      <Link
        className="group absolute right-12 top-12 flex h-10 w-10 items-center justify-center rounded-full bg-n-2 text-0 transition-colors hover:bg-primary-1 md:right-6 md:top-6"
        href="/"
      >
        <Icon
          className="fill-n-7 transition-colors group-hover:fill-n-1"
          name="close"
        />
      </Link>
    </div>
  );
};

export default SignInPage;
