import { instanceRoot } from "../../axios";
import {
  FETCH_IMG_FAILURE,
  FETCH_IMG_REQUEST,
  FETCH_IMG_SUCCESS,
} from "./type";
import axios from "axios";

const fetchImgRequest = () => {
  return {
    type: FETCH_IMG_REQUEST,
  };
};

const fetimgSuccess = (data) => {
  return {
    type: FETCH_IMG_SUCCESS,
    payload: data,
  };
};

const fetimgFailure = (err) => {
  return {
    type: FETCH_IMG_FAILURE,
    payload: err,
  };
};

export const fetchImageList = () => {
  return (dispatch) => {
    dispatch(fetchImgRequest);
    instanceRoot
      .get("/photos")
      .then((res) => {
        let _list = res.data;
        dispatch(fetimgSuccess(_list));
      })
      .catch((err) => {
        dispatch(fetimgFailure(err.message));
      });
  };
};
