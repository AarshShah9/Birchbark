type ChatEmptyProps = Record<string, never>;

const ChatEmpty = ({}: ChatEmptyProps) => (
  <>
    {Array.from(Array(4).keys()).map((x) => (
      <div className="mb-2 last:mb-0" key={x}>
        <div className="flex p-3">
          <div className="ml-0.25 mr-3 mt-0.25 h-5.5 w-5.5 rounded-md bg-n-3 dark:bg-n-5"></div>
          <div className="grow">
            <div className="mt-1.5 h-3 w-40 rounded-sm bg-n-3 dark:bg-n-5"></div>
            <div className="mt-3.5 h-3 rounded-sm bg-n-3 dark:bg-n-5"></div>
            {x === 2 && (
              <div className="mt-3 h-34 rounded-2xl bg-n-3 dark:bg-n-5"></div>
            )}
            <div className="mt-3 flex items-center justify-between">
              <div className="h-7 w-7 rounded-full bg-n-3 dark:bg-n-5"></div>
              <div className="h-2 w-12 rounded-sm bg-n-3 dark:bg-n-5"></div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default ChatEmpty;
