import Link from "next/link";
import Image from "@/components/Image";

type TestProps = {
  className?: string;
  dark?: boolean;
};

const Test = ({ className, dark }: TestProps) => (
  <Link className={`flex w-[11.88rem] ${className}`} href="/">
    <Image
      className="h-auto w-full"
      // src={dark ? "/images/logo-dark.svg" : "/images/logo.svg"}
      src="/images/BirchbarkLogo.svg"
      width={1000}
      height={600}
      alt="Birchbark Health Logo"
    />
  </Link>
);

export default Test;
