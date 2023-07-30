import Link from "next/link";
import Application from "./Application";

import { applications } from "@/mocks/applications";

type ApplicationsProps = Record<string, never>;

const Applications = ({}: ApplicationsProps) => (
  <>
    <div className="mb-8 flex items-center">
      <div className="h4 mr-auto">Applications</div>
      <Link className="btn-blue" href="/applications">
        Add apps
      </Link>
    </div>
    <div className="base2 py-3 text-n-4">Authorized apps</div>
    <div className="mb-6">
      {applications
        .filter((x: any) => x.installed === true)
        .map((application) => (
          <Application item={application} key={application.id} />
        ))}
    </div>
  </>
);

export default Applications;
