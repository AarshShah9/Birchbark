import Link from "next/link";
import Image from "~/components/Image";
import Icon from "~/components/Icon";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="min-h-screen-ios relative flex min-h-screen lg:p-6 md:px-6 md:pb-10 md:pt-16">
      <div className="relative w-[40rem] shrink-0 overflow-hidden p-20 2xl:w-[37.5rem] xl:w-[30rem] xl:p-10 lg:hidden">
        <div className="max-w-[25.4rem]">
          <div className="h2 mb-4 text-n-1">Unlock the power of AI</div>
          <div className="body1 text-n-3">
            Chat with the smartest AI - Experience the power of AI with us
          </div>
        </div>
        <div className="absolute left-5 right-5 top-52 h-[50rem] xl:top-24">
          <Image
            className="object-contain"
            src="/images/create-pic.png"
            fill
            sizes="(max-width: 1180px) 50vw, 33vw"
            alt=""
          />
        </div>
      </div>
      <div className="my-6 mr-6 flex grow justify-center rounded-[1.25rem] bg-n-1 p-10 align-middle dark:bg-n-6 lg:m-0 md:p-0">
        <SignIn signUpUrl={"/sign-up"} routing={"virtual"} />
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
