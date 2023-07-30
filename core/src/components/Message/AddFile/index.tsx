import { useState } from "react";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";

type AddFileProps = Record<string, never>;

const AddFile = ({}: AddFileProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <button
        className="group absolute bottom-2 left-3 h-10 w-10 outline-none"
        onClick={() => setVisible(true)}
      >
        <Icon
          className="h-7 w-7 fill-[#7F8689] transition-colors group-hover:fill-primary-1 dark:fill-n-4"
          name="plus-circle"
        />
      </button>
      <Modal
        classWrap="max-w-[25.2rem] rounded-none bg-transparent"
        classOverlay="bg-n-7/95 dark:bg-n-7/95"
        classButtonClose="hidden"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <div className="relative rounded-[1.25rem] bg-primary-1 p-3">
          <input className="absolute inset-0 opacity-0" type="file" />
          <div className="rounded-xl border-2 border-dashed border-n-1 px-6 py-14 text-center text-n-1">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-n-1">
              <Icon name="upload" />
            </div>
            <div className="h5">Upload to Brainwave</div>
            <div className="base2">You can add prompts after uploading.</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddFile;
