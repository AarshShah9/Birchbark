import { useState } from "react";
import InputMask from "react-input-mask";
import Icon from "@/components/Icon";
import RadioGroup from "./RadioGroup";
import Foot from "./Foot";

const plans = [
  {
    id: "0",
    title: "monthly",
    value: 399,
  },
  {
    id: "1",
    title: "yearly",
    value: 349,
    save: 20,
  },
];

type FormProps = Record<string, never>;

const Form = ({}: FormProps) => {
  const [plan, setPlan] = useState<any>(plans[0]);
  const [email, setEmail] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<any>({
    value: "",
    mask: "9999-9999-9999-9999",
  });
  const [date, setDate] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const onChange = (e: any) => {
    if (e.target && e.target.value && setCardNumber) {
      const value = e.target.value;
      const newState = {
        mask: "9999-9999-9999-9999",
        value: value,
      };
      if (/^3[47]/.test(value)) {
        newState.mask = "9999-999999-99999";
      }
      setCardNumber(newState);
    }
  };

  const styleInput =
    "w-full h-6 border-none bg-transparent base1 outline-none placeholder:text-n-4/50";

  return (
    <form action="" onSubmit={() => console.log("Submit")}>
      <div className="base2 mb-3 flex items-center">
        <div className="mr-auto dark:text-n-4">Plan</div>
        <div className="mr-5 text-n-4">Change currency</div>
        <div className="font-semibol rounded bg-n-3 px-3 py-0.5 dark:bg-n-7 dark:text-n-1">
          USD
        </div>
      </div>
      <RadioGroup items={plans} value={plan} setValue={setPlan} />
      <div className="mb-3 rounded-xl border border-n-3 dark:border-n-5">
        <div className="p-5">
          <div className="base2 mb-3 text-n-5">Billing email</div>
          <div className="relative">
            <Icon
              className="pointer-events-none absolute left-0 top-0 fill-n-4/50"
              name="email"
            />
            <input
              className={`${styleInput} pl-11`}
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="border-t border-n-3 p-5 dark:border-n-5">
          <div className="base2 mb-3 text-n-5">Card details</div>
          <div className="flex md:flex-wrap">
            <div className="relative grow md:mb-4 md:w-full">
              <Icon
                className="pointer-events-none absolute left-0 top-0 fill-n-4/50"
                name="credit-card"
              />
              <InputMask
                className={`${styleInput} pl-11`}
                {...cardNumber}
                type="tel"
                onChange={onChange}
                placeholder="Card number"
                required
              />
            </div>
            <div className="mx-8 w-20 shrink-0 md:ml-0 md:mr-auto">
              <InputMask
                className={`${styleInput} text-center md:text-left`}
                mask="99 / 99"
                placeholder="MM / YY"
                type="tel"
                value={date}
                onChange={(e: any) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="w-10 shrink-0">
              <InputMask
                className={`${styleInput} text-center`}
                mask="999"
                placeholder="CVC"
                type="tel"
                value={code}
                onChange={(e: any) => setCode(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </form>
  );
};

export default Form;
