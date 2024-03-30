"use client";
import EventCard from "@/components/events/EventCard";
import FilterEventsByTag from "@/components/events/FilterEventsByTag";
import NoEvents from "@/components/events/NoEvents";
import Header from "@/components/header/Header";
import Tooltip from "@/components/tooltip/Tooltip";
import MainLayout from "@/layouts/MainLayout";
import { useAppSelector } from "@/redux/hooks";
import { Event } from "@/types/eventTypes";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React from "react";

const Posts = (): React.JSX.Element => {
  const { events, searchEventByTag } = useAppSelector((state) => state.event);
  const { selected } = useAppSelector((state) => state.user);
  const router: AppRouterInstance = useRouter();

  const filteredEvents: Event[] = events.filter((event) =>
    event.tags.toLowerCase().includes(searchEventByTag.toLowerCase())
  );

  const navigateToNewEvent = (): void => {
    router.push("/newEvent");
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center">
        {events.length > 0 && (
          <>
            <Header title="Events" />
            <div className="p-2 mt-5">
              <Tooltip content="Add new event">
                {selected && (
                  <button onClick={navigateToNewEvent} className="text-center">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                )}
              </Tooltip>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col items-center">
        {events.length > 0 && <FilterEventsByTag />}

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
            {filteredEvents.map((event: Event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <>
            <NoEvents />
            <div className="p-2">
              <Tooltip content="Add new event">
                {selected && events.length === 0 && (
                  <button onClick={navigateToNewEvent} className="text-center">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                )}
              </Tooltip>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Posts;
