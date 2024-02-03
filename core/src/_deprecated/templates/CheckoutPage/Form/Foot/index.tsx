import Icon from "@/components/Icon";

type FootProps = Record<string, never>;

const Foot = ({}: FootProps) => (
  <div className="">
    <div className="caption1 mb-6 flex items-center text-n-4/50">
      <Icon className="mr-2 h-4 w-4 fill-[#0C923C]" name="lock" />
      Secured form with UI8 Banking
    </div>
    <div className="text-right">
      <div className="h4">Billed now: $399</div>
      <button
        className="base2 mb-4 font-semibold text-primary-1 transition-colors hover:text-primary-1/90"
        type="button"
      >
        Apply promo code
      </button>
      <div className="caption1 mb-4 ml-auto max-w-[27rem] text-n-4/50 dark:text-n-4/75">
        By clicking &quot;Start Brainwave Enterprise plan&quot;, you agree to be
        charged $399 every month, unless you cancel.
      </div>
      {/* <button className="btn-blue" type="submit">
                Start Brainwave Enterprise plan
            </button> */}
      {/*<Link href="/thanks" className="btn-blue md:w-full" type="submit">*/}
      {/*  Start Brainwave Enterprise plan*/}
      {/*</Link>*/}
    </div>
  </div>
);

export default Foot;
