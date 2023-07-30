type LoadingProps = Record<string, never>;

const Loading = ({}: LoadingProps) => (
  <div className="">
    <div className="flex space-x-1.5">
      <div className="h-2 w-2 animate-[loaderDots_0.6s_0s_infinite_alternate] rounded-full bg-n-7 dark:bg-n-1"></div>
      <div className="h-2 w-2 animate-[loaderDots_0.6s_0.3s_infinite_alternate] rounded-full bg-n-7 dark:bg-n-1"></div>
      <div className="h-2 w-2 animate-[loaderDots_0.6s_0.6s_infinite_alternate] rounded-full bg-n-7 dark:bg-n-1"></div>
    </div>
  </div>
);

export default Loading;
