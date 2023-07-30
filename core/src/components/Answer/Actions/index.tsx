import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import Image from "@/components/Image";
import Notify from "@/components/Notify";
import ModalShareChat from "@/components/ModalShareChat";

type ActionsProps = Record<string, never>;

const Actions = ({}: ActionsProps) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [share, setShare] = useState<boolean>(false);
  const [archive, setArchive] = useState<boolean>(false);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const onCopy = () => {
    setCopied(true);
    toast((t) => (
      <Notify iconCheck>
        <div className="h6 ml-3">Content copied</div>
      </Notify>
    ));
  };

  const handleClick = () => {
    toast((t) => (
      <Notify iconCheck>
        <div className="h6 ml-3 mr-6">1 chat archived</div>
        <button
          className="btn-blue btn-medium ml-3"
          onClick={() => toast.dismiss(t.id)}
        >
          Undo
        </button>
      </Notify>
    ));
  };

  const styleButton =
    "h-6 ml-3 px-2 bg-n-3 rounded-md caption1 txt-n-6 transition-colors hover:text-primary-1 dark:bg-n-7";

  return (
    <>
      <CopyToClipboard text="Content" onCopy={onCopy}>
        <button className={`${styleButton} md:hidden`}>Copy</button>
      </CopyToClipboard>
      <button className={styleButton}>Regenerate response</button>
      {!share && !archive && (
        <div className="ml-3 flex space-x-1 rounded-md bg-n-3 px-1 dark:bg-n-7 md:hidden">
          <button className="" onClick={() => setShare(true)}>
            <Image
              src="/images/smile-heart-eyes.png"
              width={24}
              height={24}
              alt="Smile heart eyes"
            />
          </button>
          <button className="" onClick={() => setArchive(true)}>
            <Image
              src="/images/smile-unamused.png"
              width={24}
              height={24}
              alt="Smile unamused"
            />
          </button>
        </div>
      )}
      {share && (
        <button
          className={`flex items-center ${styleButton} pl-1 md:hidden`}
          onClick={() => setVisibleModal(true)}
        >
          <Image
            src="/images/smile-heart-eyes.png"
            width={24}
            height={24}
            alt="Smile heart eyes"
          />
          Share
        </button>
      )}
      {archive && (
        <button
          className={`flex items-center ${styleButton} pl-1 md:hidden`}
          onClick={handleClick}
        >
          <Image
            src="/images/smile-unamused.png"
            width={24}
            height={24}
            alt="Smile unamused"
          />
          Archive chat
        </button>
      )}
      <ModalShareChat
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
      />
    </>
  );
};

export default Actions;
