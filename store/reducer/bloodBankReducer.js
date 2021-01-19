import { ADD_DONOR, FIND_DONOR } from "../action/bloodBankActions";
const initialState = {
  donors: [
    { id: "1", bloodGroup: "A", name: "Kashif", location: "Karachi" },
    { id: "2", bloodGroup: "B", name: "Hameed", location: "Lahore" },
    { id: "3", bloodGroup: "AB", name: "Umair", location: "Islamabad" },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DONOR:
      return {
        ...state,
        donors: state.donors.concat(action.payload),
      };
    case FIND_DONOR:
      const match = state.donors.filter(
        (donor) =>
          donor.location.toLowerCase() ===
            action.payload.location.toLowerCase() &&
          donor.bloodGroup.toLowerCase() ===
            action.payload.bloodGroup.toLowerCase()
      );
      return {
        ...state,
        donors: match,
      };
    default:
      return state;
  }
};
