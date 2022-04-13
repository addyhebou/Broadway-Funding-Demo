export default (state, action) => {
  switch (action.type) {
    // case 'ADD_ITEM':
    //   const key = action.payload[0];
    //   const value = action.payload[1];
    //   state.order[key] = value;
    //   return {
    //     order: state.order,
    //   };
    case 'REMOVE_ITEM':
      return {
        order: state.demo.filter((item) => item !== action.payload),
      };
    case 'UPDATE_NUMBERS':
      const key = action.payload[0];
      const value = action.payload[1];
      state.userInputs[key] = value;
      //   console.log('Updated userInputs from the reducer: ', state.userInputs);
      return {
        userInputs: state.userInputs,
      };
    default:
      return state;
  }
};
