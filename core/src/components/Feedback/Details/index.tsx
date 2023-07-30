import Icon from "@/components/Icon";

type DetailsProps = Record<string, never>;

const Details = ({}: DetailsProps) => (
  <div className="flex items-center p-5 md:block">
    <div className="mr-auto flex items-center">
      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-xl bg-[#52BA69]/20">
        <Icon className="h-8 w-8 fill-[#52BA69]" name="codepen" />
      </div>
      <div className="grow pl-4">
        <div className="h6 mb-1">Very good!</div>
        <div className="flex items-center">
          <div className="flex">
            <Icon
              className="mr-2 h-5 w-5 fill-accent-5 md:mr-1 md:h-4 md:w-4"
              name="star-rating"
            />
            <Icon
              className="mr-2 h-5 w-5 fill-accent-5 md:mr-1 md:h-4 md:w-4"
              name="star-rating"
            />
            <Icon
              className="mr-2 h-5 w-5 fill-accent-5 md:mr-1 md:h-4 md:w-4"
              name="star-rating"
            />
            <Icon
              className="mr-2 h-5 w-5 fill-accent-5 md:mr-1 md:h-4 md:w-4"
              name="star-rating"
            />
            <Icon
              className="h-5 w-5 fill-n-4 md:h-4 md:w-4"
              name="star-rating"
            />
          </div>
          <div className="base2 ml-2 rounded-lg bg-n-3 px-2 font-semibold text-n-7">
            4.85
          </div>
        </div>
      </div>
    </div>
    <button className="btn-dark 2xl:w-12 2xl:p-0 2xl:text-0 md:mt-4 md:w-full md:text-[0.875rem]">
      <span>Download</span>
      <Icon className="2xl:!m-0 md:!ml-3" name="download-fill" />
    </button>
  </div>
);

export default Details;
