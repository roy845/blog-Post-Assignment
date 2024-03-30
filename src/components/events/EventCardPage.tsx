import { Event } from "@/types/eventTypes";
import React from "react";
import { format } from "timeago.js";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type EventCardPageProps = {
  selectedEvent: Event;
};

const EventCardPage: React.FC<EventCardPageProps> = ({ selectedEvent }) => {
  const router: AppRouterInstance = useRouter();

  const handleBackClick = (): void => {
    router.back();
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg flex flex-col">
      <div className="flex justify-between">
        <p className="text-gray-600">{format(new Date(selectedEvent?.date))}</p>
        <Header title={selectedEvent?.title} />

        <FontAwesomeIcon
          icon={faArrowRight}
          className="cursor-pointer"
          onClick={handleBackClick}
        />
      </div>
      <div>
        <strong>Created at</strong>
        <p>
          {new Date(selectedEvent?.date).toLocaleDateString() +
            " " +
            new Date(selectedEvent?.date).toLocaleTimeString()}
        </p>
        <strong>By</strong> <p>{selectedEvent?.user}</p>
        <strong>Content</strong>
        <p style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}>
          {selectedEvent?.content}
        </p>
        <strong>Tags</strong>
        <div className="flex flex-wrap gap-2 mt-4">
          {selectedEvent?.tags
            ?.split(/\s+/)
            .map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventCardPage;
