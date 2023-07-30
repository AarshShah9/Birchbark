import Device from "./Device";

const devices = [
  {
    id: "0",
    title: "Chrome on iPhone",
    image: "/images/chrome.svg",
    address: "222.225.225.222",
    date: "Signed in Nov 17, 2023",
  },
  {
    id: "1",
    title: "Chrome on Macbook Pro",
    image: "/images/chrome.svg",
    address: "222.225.225.222",
    date: "Signed in Nov 17, 2023",
  },
  {
    id: "2",
    title: "Safari on Macbook Pro",
    image: "/images/safari.svg",
    address: "222.225.225.222",
    date: "Signed in Nov 17, 2023",
  },
];

type SessionsProps = Record<string, never>;

const Sessions = ({}: SessionsProps) => (
  <>
    <div className="h4 mb-8 md:mb-6">Your sessions</div>
    <div className="base2 mb-8 text-n-4 md:mb-6">
      This is a list of devices that have logged into your account. Revoke any
      sessions that you do not recognize.
    </div>
    <div className="base2 py-3 text-n-4">Devices</div>
    <div className="mb-6">
      {devices.map((device) => (
        <Device item={device} key={device.id} />
      ))}
    </div>
    <button className="btn-blue w-full">Sign out all devices</button>
  </>
);

export default Sessions;
