import React from "react";
import TopHeading from "./TopHeading";
import Links from "../links/Links";
import AuthButton from "../auth/AuthButton";
import LoggedInUser from "./LoggedInUser";

const Topbar = (): React.JSX.Element => {
  return (
    <div className="bg-[#0d0c26] p-4 text-white flex items-center justify-between">
      <TopHeading sm title="Blog post" />
      <LoggedInUser />
      <Links />
      <AuthButton />
    </div>
  );
};

export default Topbar;
