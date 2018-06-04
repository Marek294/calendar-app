import { CHANGE_EVENT_POSITION } from "../actions/types";

const events = [
  {
    id: 1,
    doctor: {
      account_id: 7,
      id: 1,
      title: "Blue Walker"
    },
    patient: {
      id: 2,
      salutation: "Mrs.",
      firstname: "Anna",
      lastname: "A.",
      gender: 0,
      notify_email: false,
      notify_sms: false,
      language: "de"
    },
    start_time: "2015-11-11 09:00:00",
    end_time: "2015-11-11 10:00:00",
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
      id: 2,
      salutation: "Mr.",
      firstname: "Test",
      lastname: "B.",
      gender: 0,
      notify_email: false,
      notify_sms: false,
      language: "de"
    },
    start_time: "2015-11-11 09:00:00",
    end_time: "2015-11-11 10:00:00",
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

    default:
      return state;
  }
};
