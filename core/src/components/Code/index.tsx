import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { srcery } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type CodeType = {
  id: string;
  title: string;
  language: string;
  value: string;
};

type CodeProps = {
  items: CodeType[];
};

const Code = ({ items }: CodeProps) => {
  const [value, setValue] = useState<string>("0");
  const [copied, setCopied] = useState<boolean>(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl">
        <div className="flex items-center bg-n-6 py-1 pl-2 pr-4">
          <div className="mr-auto flex md:mr-0 md:w-full">
            {items.map((item) => (
              <button
                className={twMerge(
                  `caption1 h-8 min-w-[9rem] rounded-lg font-semibold text-n-4 transition-colors hover:text-n-1 2xl:min-w-[1rem] md:basis-1/3 ${
                    value === item.id && "bg-n-5 text-n-1"
                  }`
                )}
                key={item.id}
                onClick={() => setValue(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
          {copied ? (
            <div className="caption1 flex items-center font-semibold text-n-1">
              <Icon className="mr-1 h-4 w-4 fill-n-1" name="check-thin" />
              Copied!
            </div>
          ) : (
            items
              .filter((x) => x.id === value)
              .map((item) => (
                <CopyToClipboard
                  key={item.id}
                  text={item.value}
                  onCopy={onCopy}
                >
                  <button className="caption1 ml-3 shrink-0 font-semibold text-n-1 transition-colors hover:text-primary-1 md:hidden">
                    Copy code
                  </button>
                </CopyToClipboard>
              ))
          )}
        </div>
        <div className="max-h-[17.625rem] overflow-auto md:max-h-[20rem]">
          {items
            .filter((x) => x.id === value)
            .map((item) => (
              <SyntaxHighlighter
                language={item.language}
                showLineNumbers
                style={srcery}
                customStyle={{
                  maxWidth: "100%",
                  padding: "1rem 1rem 1.5rem",
                }}
                lineNumberStyle={{
                  textAlign: "left",
                  color: "#7A7C7C",
                }}
                key={item.id}
              >
                {item.value}
              </SyntaxHighlighter>
            ))}
        </div>
      </div>
      <div className="">
        Note: This is just an example of a simple HTML form. In a real-world
        scenario, you would also want to include proper validation and handling
        of the form data on the server side.
      </div>
      <div className="flex items-center justify-between rounded-xl bg-n-1 py-1 pl-4 pr-1 shadow-[0_0_1rem_0.5rem_rgba(0,0,0,0.07)] dark:bg-n-6/50">
        I have created a project in your Codepen account
        <button className="btn-dark btn-medium ml-4 shrink-0">
          <span>View</span>
          <Icon name="external-link" />
        </button>
      </div>
    </div>
  );
};

export default Code;
