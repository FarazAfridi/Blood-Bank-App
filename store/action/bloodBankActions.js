export const FIND_DONOR = "FIND_DONOR";
export const ADD_DONOR = "ADD_DONOR";
export const FETCH_DONORS = 'FETCH_DONORS';

export const addDonor = (donor) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bloodbank-5c299-default-rtdb.firebaseio.com/blood-donors.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: donor.id,
            name: donor.name,
            bloodGroup: donor.bloodGroup,
            location: donor.location,
          }),
        }
      );

      if (!response.ok) {
        throw Error("Something went wrong!");
      }

      dispatch({ type: ADD_DONOR, payload: donor });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchDonors = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bloodbank-5c299-default-rtdb.firebaseio.com/blood-donors.json"
      );
      const data = await response.json();
      const donors = [];
      for (const key in data){
          donors.push(data[key])
      }

      dispatch({type: FETCH_DONORS, payload: donors})
    } catch (error) {
      console.log(error);
    }
  };
};

export const findDonor = (donor) => {
  return {
    type: FIND_DONOR,
    payload: donor,
  };
};
