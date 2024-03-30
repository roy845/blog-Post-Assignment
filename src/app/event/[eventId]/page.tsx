"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MainLayout from "@/layouts/MainLayout";
import { setSelectedEvent } from "@/features/event/eventSlice";
import EventCardPage from "@/components/events/EventCardPage";

const EventPage = ({
  params,
}: {
  params: { eventId: string };
}): React.JSX.Element => {
  const dispatch = useAppDispatch();

  let decodedEventId: string = decodeURIComponent(params.eventId);

  if (decodedEventId.endsWith("}")) {
    decodedEventId = decodedEventId.slice(0, -1);
  }

  useEffect(() => {
    dispatch(setSelectedEvent(decodedEventId));
  }, [decodedEventId, dispatch]);

  const { selectedEvent } = useAppSelector((state) => state.event);

  return (
    <MainLayout>
      <EventCardPage selectedEvent={selectedEvent} />
    </MainLayout>
  );
};

export default EventPage;
