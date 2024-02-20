import React, { useCallback } from "react";
import { api } from "~/utils/api";
import Loading from "~/customComponents/Loading";
import Navbar from "~/customComponents/Navbar";
import Footer from "~/customComponents/Footer";
import { useRouter } from "next/router";

const OrganizationSelectionPage = () => {
  const { data, isLoading } = api.organization.getAllOrganizations.useQuery();
  const router = useRouter();

  const onClick = useCallback(
    (orgId: number) => {
      // Use router.push to navigate with query parameters
      router.push(`/sign-in?orgId=${orgId}&patient=true`);
    },
    [router]
  );

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div
          className="flex items-center justify-center"
          style={{ height: `calc(100vh - 250px)` }}
        >
          <Loading />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-grow flex-col items-center bg-[#232627] p-4">
        {/* Title */}
        <h2 className="mb-4 text-5xl font-semibold text-white">
          Choose your clinic
        </h2>
        {/* Border added to the list container */}
        <ul className="w-full max-w-md rounded-lg border border-gray-600">
          {data?.map((org) => (
            <li
              key={org.id}
              className="cursor-pointer rounded-md p-2 text-white transition-colors hover:bg-gray-700"
              onClick={() => onClick(org.id)}
            >
              {org.name}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default OrganizationSelectionPage;
