export const FIND_DONOR = 'FIND_DONOR';
export const ADD_DONOR = 'ADD_DONOR';

export const addDonor = (donor) => {
    return {
        type: ADD_DONOR,
        payload: donor
    }
}

export const findDonor = (donor) => {
    return {
        type: FIND_DONOR,
        payload: donor
    }
}