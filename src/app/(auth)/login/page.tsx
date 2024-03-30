import LoginComp from "@/components/auth/LoginComp";
import Header from "@/components/header/Header";
import MainLayout from "@/layouts/MainLayout";
import React from "react";

const Login = (): React.JSX.Element => {
  return (
    <MainLayout>
      <Header title="Login" />
      <LoginComp />
    </MainLayout>
  );
};

export default Login;
