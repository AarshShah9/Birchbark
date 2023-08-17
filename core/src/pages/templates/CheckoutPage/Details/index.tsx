import Icon from "@/components/Icon";

const details = [
  "Customizable AI models",
  "Advanced team management",
  "Enterprise-level support",
  "Integration with CRMs",
  "Dedicated account manager",
];

type DetailsProps = Record<string, never>;

const Details = ({}: DetailsProps) => (
  <>
    <div className="mb-1 flex items-center justify-between">
      <div className="h5 text-[#139843]">Enterprise</div>
      <div className="caption1 ml-4 shrink-0 rounded bg-[#FF97E8] px-3 py-0.5 font-semibold text-n-7">
        Popular
      </div>
    </div>
    <div className="base1 font-semibold">
      $399<span className="ml-4 text-n-4">Monthly Plan</span>
    </div>
    <div className="mt-8 space-y-5 border-t border-n-4/25 pt-8 lg:hidden">
      {details.map((x: any, index: number) => (
        <div className="base2 flex" key={index}>
          <Icon className="mr-3 fill-primary-1" name="check-circle" />
          {x}
        </div>
      ))}
    </div>
  </>
);

export default Details;
