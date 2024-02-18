import Link from "next/link";
import Image from "~/components/Image";
import Icon from "~/components/Icon";
import { SignIn } from "@clerk/nextjs";
import { signInResources } from "~/resources/signin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "~/customComponents/Loading";

const SignInPage = () => {
  const [url, setUrl] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const orgId = router.query.orgId as string;
    const patient = router.query.patient === "true"; // Convert to boolean

    if (patient) {
      setUrl(`/app/patient/patient-form/`);
    } else {
      setUrl(`/app/calendar/`);
    }
  }, [router.query]);

  if (url === "") {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen-ios relative flex min-h-screen bg-[#232627]">
      <div className="flex grow flex-col items-center justify-center bg-[#232627]">
        <div className="z-2 rounded-xl bg-[#414141] p-12 md:bg-transparent md:p-0">
          <div className="mb-8 flex w-full items-center justify-center">
            <img
              className="h-32"
              alt="Birchbark Health Logo"
              src="/images/BirchbarkLogo.svg"
            />
          </div>

          <div className="flex items-center justify-center">
            <SignIn
              signUpUrl={"/sign-up"}
              routing={"virtual"}
              afterSignInUrl={url}
            />
          </div>
          <div className="body1 mt-6 text-center text-n-3">
            {signInResources.chat.English}
          </div>
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
