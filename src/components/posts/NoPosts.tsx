import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const NoPosts = (): React.JSX.Element => {
  return (
    <div className="text-center p-10">
      <FontAwesomeIcon
        icon={faNewspaper}
        size="3x"
        className="text-gray-600 mb-4"
      />
      <h2 className="text-xl font-semibold">No Posts Available</h2>
      <p>It looks like there are no posts to display here. Check back later!</p>
    </div>
  );
};

export default NoPosts;
