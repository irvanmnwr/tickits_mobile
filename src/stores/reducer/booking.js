const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
  data: {}
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_BOOKING_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_DATA_BOOKING_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg
      };
    }
    case "GET_DATA_BOOKING_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.response.data.msg
      };
    }
    default: {
      return state;
    }
  }
};

export default booking;
