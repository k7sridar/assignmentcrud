const state = {
  data: [],
};

const Reducer = (intialState = state, action) => {
  if (action.type === 'add_Form') {
    const data = intialState.data;
    intialState = { ...intialState, data: [...data, action.payload.info] };

    return intialState;
  }
  if (action.type === 'del_Form') {
    let data = intialState.data;
    data = data.filter((v, i) => i !== action.payload);
    intialState = { ...intialState, data: [...data] };
    return intialState;
  }
  if (action.type === 'up_Form') {
    let data = intialState.data;

    let temp = data.filter((v, i) => i !== action.payload.index);
    temp = [...temp, action.payload.info];

    intialState = { ...intialState, data: [...temp] };

    return intialState;
  }

  return intialState;
};

export default Reducer;
