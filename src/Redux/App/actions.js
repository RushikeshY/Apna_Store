import {
  ADD_ITEM_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  SOLD_ITEM_FAILURE,
  SOLD_ITEM_REQUEST,
  SOLD_ITEM_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const addItemRequest = () => ({
  type: ADD_ITEM_REQUEST,
});

export const addItemSuccess = (data) => ({
  type: ADD_ITEM_SUCCESS,
  payload: data,
});
export const addItemFailure = () => ({
  type: ADD_ITEM_FAILURE,
});

export const soldItemRequest = () => ({
  type: SOLD_ITEM_REQUEST,
});

export const soldItemSuccess = (data) => ({
  type: SOLD_ITEM_SUCCESS,
  payload: data,
});
export const soldItemFailure = () => ({
  type: SOLD_ITEM_FAILURE,
});

export const addItemToList = (payload) => (dispatch) => {
  dispatch(addItemRequest());
  axios
    .post("https://thawing-fortress-14096.herokuapp.com/Products_Data", payload)
    .then((r) => {
      console.log(r.data);
      dispatch(getItemList());
    })
    .catch((e) => {
      console.log(e);
      dispatch(addItemFailure());
    });
};

export const getItemList = (payload) => (dispatch) => {
  dispatch(addItemRequest());
  axios
    .get("https://thawing-fortress-14096.herokuapp.com/Products_Data", payload)
    .then((r) => {
      console.log("homepage get data is ",r.data)
      dispatch(addItemSuccess(r.data));
    })
    .catch((e) => {
      dispatch(addItemFailure());
    });
};

export const sellQtyFunction = (id, sellqty) => (dispatch) => {
  dispatch(soldItemRequest());
  console.log(id,sellqty)
  axios
    .patch(`https://thawing-fortress-14096.herokuapp.com/Products_Data/${id}`,sellqty)
    .then((r) => {
      dispatch(getItemList());
    })
    .catch((e) => {
      console.log(e);
      dispatch(soldItemFailure());
    });
};

export const addQtyFunction = (id, addqty) => (dispatch) => {
  dispatch(addItemRequest());
  axios
    .patch(`https://thawing-fortress-14096.herokuapp.com/Products_Data/${id}`,addqty)
    .then((r) => {
      dispatch(getItemList());
    })
    .catch((e) => {
      console.log(e);
    });
};

export const removeItemFunction = (id) => (dispatch) => {
  axios
    .delete(`https://thawing-fortress-14096.herokuapp.com/Products_Data/${id}`)
    .then((r) => {
      console.log("sunday")
      dispatch(getItemList());
    })
    .catch((e) => {
      console.log(e);
    });
};

