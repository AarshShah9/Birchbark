import Image from "@/components/Image";

type ProfileProps = {
  visible?: boolean;
};

const Profile = ({ visible }: ProfileProps) => (
  <div
    className={`${
      visible ? "mb-6" : "mb-3 shadow-[0_1.25rem_1.5rem_0_rgba(0,0,0,0.5)]"
    }`}
  >
    <div className={`${!visible && "rounded-xl bg-n-6 p-2.5"}`}>
      <div
        className={`flex items-center ${
          visible ? "justify-center" : "px-2.5 py-2.5 pb-4.5"
        }`}
      >
        <div className="relative h-10 w-10">
          <Image
            className="rounded-full object-cover"
            src="/images/avatar.jpg"
            fill
            alt="Avatar"
          />
          <div className="absolute -bottom-0.75 -right-0.75 h-4.5 w-4.5 rounded-full border-4 border-n-6 bg-primary-2"></div>
        </div>
        {!visible && (
          <>
            <div className="ml-4 mr-4">
              <div className="base2 font-semibold text-n-1">
                Tran Mau Tri Tam
              </div>
              <div className="caption1 font-semibold text-n-3/50">
                tam@ui8.net
              </div>
            </div>
            <div className="shrnik-0 caption1 ml-auto self-start rounded-lg bg-primary-2 px-3 font-bold text-n-7">
              Free
            </div>
          </>
        )}
      </div>
      {/*{!visible && (*/}
      {/*    <Link className="btn-stroke-dark w-full mt-2" href="/pricing">*/}
      {/*        Upgraded to Pro*/}
      {/*    </Link>*/}
      {/*)}*/}
    </div>
  </div>
);

export default Profile;
