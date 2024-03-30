import {
  AddEventAction,
  SetSearchEventByTagAction,
  SetSelectedEventAction,
  SetSelectedEventIdAction,
} from "@/types/actions/eventActionsTypes";
import { EventState } from "@/types/eventTypes";
import { Event } from "@/types/eventTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: EventState = {
  events: [] as Event[],
  selectedEvent: {} as Event,
  selectedEventId: "",
  searchEventByTag: "",
};

export const eventSlice = createSlice({
  name: "event",
  initialState,

  reducers: {
    addEvent(state, action: AddEventAction) {
      state.events.push(action.payload);
      state.events.sort((a: Event, b: Event) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      });
    },
    setSearchEventByTag(state, action: SetSearchEventByTagAction) {
      state.searchEventByTag = action.payload;
    },
    setSelectedEvent(state, action: SetSelectedEventAction) {
      const index = state.events.findIndex(
        (event) => event.id === action.payload
      );
      if (index !== -1) {
        state.selectedEvent = state.events[index];
      } else {
        throw new Error(`Event with id: ${action.payload} not found`);
      }
    },
    setSelectedEventId(state, action: SetSelectedEventIdAction) {
      state.selectedEventId = action.payload;
    },
  },
});

export const {
  addEvent,
  setSearchEventByTag,
  setSelectedEvent,
  setSelectedEventId,
} = eventSlice.actions;

export default eventSlice.reducer;
