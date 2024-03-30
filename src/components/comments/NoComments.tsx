import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const NoComments = (): React.JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <FontAwesomeIcon icon={faComments} size="3x" className="text-white" />
      <p className="text-lg text-white mt-4">No Comments Yet</p>
    </div>
  );
};

export default NoComments;
