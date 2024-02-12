import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

type AudioPlayerProps = {
  edit?: boolean;
  onSave?: () => void;
};

const AudioPlayer = ({ edit, onSave }: AudioPlayerProps) => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <div className="">
      <div
        className={twMerge(
          `overflow-hidden rounded-xl border-2 border-transparent bg-n-1 dark:bg-n-6 ${
            edit && "border-primary-1"
          }`
        )}
      >
        <div className="flex items-center px-3.5 py-2.5">
          <button
            className="h-8 w-8 shrink-0 rounded-full bg-n-7 text-0 dark:bg-n-1"
            onClick={() => setActive(!active)}
          >
            <Icon
              className="h-3 w-3 fill-n-1 dark:fill-n-7"
              name={active ? "pause" : "play"}
            />
          </button>
          <div className="ml-3 grow text-0">
            <Image
              className="w-full"
              src={edit ? "/images/audio-edited.svg" : "/images/audio.svg"}
              width={532}
              height={39}
              alt="Audio"
            />
          </div>
        </div>
        {edit && (
          <>
            <div className="border-t border-n-3 p-3.5 dark:border-n-5">
              <span className="bg-primary-1 text-n-1">
                Introducing &quot;Brainwave&quot;, an AI-powered product that
                can turn any
              </span>{" "}
              written script into high-quality audio. Using advanced natural
              language processing and text-to-speech technology, Speechify can
              generate realistic and natural-sounding voices in multiple
              languages, allowing you to create audiobooks, podcasts, and other
              audio content with ease. Additionally, Speechify offers a wide
              range of customization options, including different voices,
              speaking styles, and even emotions, so you can create audio that
              perfectly matches your brand or project. With Speechify, creating
              audio content has never been easier.
            </div>
            <div className="flex items-center justify-between border-t border-n-3 px-3.5 pb-2.5 pt-3.5 dark:border-n-5">
              <div className="caption1 text-n-4/75">609 characters</div>
              <button className="btn-blue btn-medium" onClick={onSave}>
                Save
              </button>
            </div>
          </>
        )}
      </div>
      <div className="caption2 mt-2 flex justify-between text-n-4">
        <div>0:21</div>
        <div>1:02</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
