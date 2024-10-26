import { SET_USERS_DATA } from "./actions";

const intialValue = {
  usersData: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = intialValue, action) => {
  switch (action?.type) {
    case SET_USERS_DATA:
      return { ...state, usersData: action?.data };

    default:
      return state;
  }
};
