import { CHANGE_EVENT_POSITION, ADD_EVENT } from "./types";

export const changeEventPosition = (draggedEvent, start_hour, day_number) => {
  return {
    type: CHANGE_EVENT_POSITION,
    draggedEvent,
    start_hour,
    day_number
  };
};

export const addEvent = newEvent => {
  return {
    type: ADD_EVENT,
    newEvent
  };
};
