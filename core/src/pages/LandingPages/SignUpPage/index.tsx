import Link from "next/link";
import Image from "~/components/Image";
import Icon from "~/components/Icon";
import { SignUp } from "@clerk/nextjs";
import { signInResources } from "~/itlText/signin";

const SignInPage = () => {
  return (
    <div className="min-h-screen-ios relative flex min-h-screen bg-[#232627]">
      <div className="flex grow flex-col items-center justify-center bg-[#232627]">
        <div className="z-2 rounded-xl bg-[#414141] p-12 md:bg-transparent md:p-0">
          <div className="mb-8 flex w-full items-center justify-center">
            {/* <div className="h3 mb-4 text-n-1">Welcome to Symptom 360</div> */}
            {/* <Image
              className="w-[80%] object-contain"
              src="/Logos/S360Logo.svg"
              height={95}
              width={300}
              alt=""
            /> */}
            <img
            className="h-32"
            alt="Birchbark Health Logo"
              src="/images/BirchbarkLogo.svg"
            />
          </div>

          <div className="flex items-center justify-center">
            <SignUp
              signInUrl={"/sign-in"}
              routing={"virtual"}
              afterSignInUrl={"/app/calendar"}
            />
          </div>
          <div className="body1 text-n-3 text-center mt-6">{signInResources.chat.English}</div>
        </div>

        <Image
          className="absolute bottom-0 z-1 w-[90%] md:hidden"
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
