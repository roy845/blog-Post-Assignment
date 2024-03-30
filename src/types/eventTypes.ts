export type Event = {
  id: string;
  title: string;
  content: string;
  user: string;
  tags: string;
  date: string;
};

export type EventState = {
  events: Event[];
  selectedEvent: Event;
  selectedEventId: string;
  searchEventByTag: string;
};
