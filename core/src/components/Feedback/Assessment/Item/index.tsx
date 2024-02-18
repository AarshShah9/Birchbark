import { useState } from "react";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";

type ItemProps = {
  item: any;
};

const Item = ({ item }: ItemProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div className="base2 table-row md:flex md:items-center">
        <div className="table-cell border-t border-n-3 py-3 pl-5 align-middle dark:border-n-5/50 md:hidden">
          {item.number}
        </div>
        <div className="table-cell border-t border-n-3 py-3 pl-5 align-middle text-accent-1 dark:border-n-5/50 md:w-1/2 md:shrink-0 md:pr-2">
          {item.incorrect}
        </div>
        <div className="table-cell border-t border-n-3 py-3 pl-5 align-middle text-[#56A171] dark:border-n-5/50 md:w-1/2 md:shrink-0 md:pl-0 md:pr-5">
          <div className="inline-flex items-center md:flex">
            <Icon
              className="mr-2 h-5 w-5 shrink-0 fill-[#56A171]"
              name="check-circle"
            />
            <div className="md:w-[calc(100%-1.25rem)] md:truncate">
              {item.correct}
            </div>
          </div>
        </div>
        <div className="table-cell border-t border-n-3 py-3 pl-5 pr-5 text-center align-middle text-0 dark:border-n-5/50 md:hidden">
          <button className="group" onClick={() => setVisible(true)}>
            <Icon
              className="fill-n-4/75 transition-colors group-hover:fill-primary-1"
              name="play-circle"
            />
          </button>
        </div>
      </div>
      <Modal visible={visible} onClose={() => setVisible(false)} video>
        <iframe
          style={{
            width: "100%",
            height: "100%",
          }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4cR7E79X8Ys"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Modal>
    </>
  );
};

export default Item;
