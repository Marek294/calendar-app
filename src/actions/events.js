import { CHANGE_EVENT_POSITION } from "./types";

export const changeEventPosition = (draggedEvent, start_hour, day_number) => {
  return {
    type: CHANGE_EVENT_POSITION,
    draggedEvent,
    start_hour,
    day_number
  };
};
