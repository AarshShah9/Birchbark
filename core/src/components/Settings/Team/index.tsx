import Member from "./Member";

import { members } from "~/_deprecated/mocks/members";

type TeamProps = Record<string, never>;

const Team = ({}: TeamProps) => (
  <>
    <div className="mb-8 flex items-center md:mb-6">
      <div className="h4 mr-auto">Members</div>
      <button className="btn-blue">Invite</button>
    </div>
    <div className="base2 py-3 text-n-4">42 members</div>
    <div className="mb-6">
      {members.map((member, index) => (
        <Member
          item={member}
          key={member.id}
          style={{ zIndex: members.length - index }}
        />
      ))}
    </div>
  </>
);

export default Team;
