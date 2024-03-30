"use client";
import { Event } from "@/types/eventTypes";
import React from "react";
import { format } from "timeago.js";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { formatDate } from "@/utils/formatDate";

type EventCardProps = {
  event: Event;
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const router: AppRouterInstance = useRouter();

  const navigateToEventPage = (): void => {
    router.push(`/event/${event.id}`);
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg flex flex-col justify-between hover:bg-gray-500 hover:text-white cursor-pointer">
      <div>
        <p className="text-gray-600 hover:text-white">
          {format(new Date(event.date))}
        </p>
        <p className="font-bold">{event.user}</p>

        <h2 className="text-xl font-bold">{event.title}</h2>
        <br />
        <p>{formatDate(event.date)}</p>
        <br />
        <p>{event.content.substring(0, 340)}...</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {event.tags.split(/\s+/).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span onClick={navigateToEventPage} className="cursor-pointer text-lg">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="ml-2">Read more</span>
        </span>
      </div>
    </div>
  );
};

export default EventCard;
