type FeaturesProps = {
  items: any;
};

const Features = ({ items }: FeaturesProps) => (
  <div className="lg:hidden">
    <div className="h4 mb-8 flex">
      <div className="h4 w-[14.875rem]">Core features</div>
      <div className="hidden flex-1 px-8 2xl:block">Free</div>
      <div className="hidden flex-1 px-8 text-[#0F9F43] 2xl:block">Pro</div>
      <div className="hidden flex-1 px-8 text-[#3E90F0] 2xl:block">
        Enterprise
      </div>
    </div>
    <div className="">
      {/*{items.map((item: any) => (*/}
      {/*  <div*/}
      {/*    className="flex items-center border-t border-n-4/15 py-5"*/}
      {/*    key={item.id}*/}
      {/*  >*/}
      {/*    <div className="base2 w-[14.875rem] font-semibold">{item.title}</div>*/}
      {/*    <div className="flex flex-1 items-center px-8">*/}
      {/*      <Icon*/}
      {/*        className={`${item.free ? "fill-primary-1" : "fill-n-4"}`}*/}
      {/*        name={item.free ? "check-thin" : "close"}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-1 items-center px-8">*/}
      {/*      <Icon*/}
      {/*        className={`${item.pro ? "fill-primary-1" : "fill-n-4"}`}*/}
      {/*        name={item.pro ? "check-thin" : "close"}*/}
      {/*      />*/}
      {/*      {item.id === "4" && <div className="base2 ml-3">Via email</div>}*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-1 items-center px-8">*/}
      {/*      <Icon*/}
      {/*        className={`${item.enterprise ? "fill-primary-1" : "fill-n-4"}`}*/}
      {/*        name={item.enterprise ? "check-thin" : "close"}*/}
      {/*      />*/}
      {/*      {item.id === "4" && <div className="base2 ml-3">Chat 24/7</div>}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  </div>
);

export default Features;
