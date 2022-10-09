import {
  ADD_ITEM_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  SOLD_ITEM_FAILURE,
  SOLD_ITEM_REQUEST,
  SOLD_ITEM_SUCCESS,
} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  itemData: [],
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        itemData: [],
      };
    }

    case ADD_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        itemData: action.payload,
      };
    }

    case ADD_ITEM_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        itemData: [],
      };
    }

    case SOLD_ITEM_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        itemData: [],
      };
    }

    case SOLD_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        itemData: action.payload,
      };
    }

    case SOLD_ITEM_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        itemData: [],
      };
    }

    default: {
      return state;
    }
  }
};
