import { CHANGE_EVENT_POSITION, ADD_EVENT } from "../actions/types";

const events = [
  {
    id: 1,
    doctor: {
      account_id: 7,
      id: 1,
      title: "Blue Walker"
    },
    patient: {
      salutation: "Mrs.",
      firstname: "Anna",
      lastname: "A.",
      gender: 0
    },
    start_hour: 0,
    day_number: 1
  },
  {
    id: 2,
    doctor: {
      account_id: 7,
      id: 1,
      title: "Blue Walker"
    },
    patient: {
      salutation: "Mr.",
      firstname: "Test",
      lastname: "B.",
      gender: 0
    },
    start_hour: 1,
    day_number: 2
  }
];

export default (state = events, action) => {
  switch (action.type) {
    case CHANGE_EVENT_POSITION:
      let newEvents = [...state];

      const element = newEvents.find(
        event => event.id === action.draggedEvent.id
      );

      element.start_hour = action.start_hour;
      element.day_number = action.day_number;

      return newEvents;

    case ADD_EVENT:
      const { newEvent } = action;

      return [...state, newEvent];

    default:
      return state;
  }
};
