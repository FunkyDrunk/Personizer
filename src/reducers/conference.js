const conference = (state = { conferenceArray: [] }, action) => {
  switch (action.type) {
    case 'CREATE_CONFERENCE':
      state.conferenceArray.push(action.payload);
      return { ...state };
    case 'GET_CONFERENCE':
      return { conferenceArray: action.payload };
    default:
      return state;
  }
};
export default conference;
