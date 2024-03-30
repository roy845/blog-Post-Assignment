import { Event } from "../eventTypes";

export type AddEventAction = {
  type: string;
  payload: Event;
};

export type SetSearchEventByTagAction = {
  type: string;
  payload: string;
};

export type SetSelectedEventAction = {
  type: string;
  payload: string;
};

export type SetSelectedEventIdAction = {
  type: string;
  payload: string;
};
