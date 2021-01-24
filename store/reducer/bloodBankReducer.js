import { ADD_DONOR, FIND_DONOR, FETCH_DONORS } from "../action/bloodBankActions";
const initialState = {
  donors: [
  ],
  filteredDonors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DONOR:
      return {
        ...state,
        donors: state.donors.concat(action.payload),
      };
    case FIND_DONOR:
      const filteredDonors = state.donors.filter(
        (donor) =>
          donor.location.toLowerCase() ===
            action.payload.location.toLowerCase() &&
          donor.bloodGroup.toLowerCase() ===
            action.payload.bloodGroup.toLowerCase()
      );
      console.log(state.donors)
      console.log(filteredDonors)
      return {
        ...state,
        filteredDonors,
      };
      case FETCH_DONORS:
        return {
          ...state,
          donors: action.payload
        }
    default:
      return state;
  }
};
