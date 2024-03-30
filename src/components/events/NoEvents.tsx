import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const NoEvents = (): React.JSX.Element => {
  return (
    <div className="text-center p-10">
      <FontAwesomeIcon
        icon={faCalendarCheck}
        size="3x"
        className="text-gray-600 mb-4"
      />
      <h2 className="text-xl font-semibold">No Events Available</h2>
      <p>
        It looks like there are no events to display here. Check back later!
      </p>
    </div>
  );
};

export default NoEvents;
