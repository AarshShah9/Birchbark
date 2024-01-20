import { useState } from "react";
import Icon from "@/components/Icon";
import Field from "@/components/Field";

type ForgotPasswordProps = {
  onClick: () => void;
};

const ForgotPassword = ({ onClick }: ForgotPasswordProps) => {
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <button className="group h5 mb-8 flex items-center" onClick={onClick}>
        <Icon
          className="mr-4 transition-transform group-hover:-translate-x-1 dark:fill-n-1"
          name="arrow-prev"
        />
        Reset your password
      </button>
      <form action="" onSubmit={() => console.log("Submit")}>
        <Field
          className="mb-6"
          classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
          placeholder="Email"
          icon="email"
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          required
        />
        <button className="btn-blue btn-large mb-6 w-full" type="submit">
          Reset password
        </button>
      </form>
    </>
  );
};

export default ForgotPassword;
