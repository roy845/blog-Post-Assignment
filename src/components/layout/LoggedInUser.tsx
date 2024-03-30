import { useAppSelector } from "@/redux/hooks";
import React from "react";
import Header from "../header/Header";

const LoggedInUser = (): React.JSX.Element => {
  const { selected } = useAppSelector((state) => state.user);

  const welcomeString = selected
    ? `Welcome back, ${selected}`
    : "Welcome, Guest!";
  return <Header sm title={welcomeString} />;
};

export default LoggedInUser;
