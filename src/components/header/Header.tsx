import React from "react";

type HeaderProps = {
  title: string;
  sm?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, sm }): React.JSX.Element => {
  return (
    <header
      className={`${sm ? "text-3xl" : "text-6xl"} font-bold p-4 text-center`}
      style={{ lineHeight: "1.4", paddingBottom: "0.5em" }}
    >
      <h1 className="bg-clip-text text-transparent bg-text-gradient">
        {title}
      </h1>
    </header>
  );
};

export default Header;
