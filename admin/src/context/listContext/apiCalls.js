import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListssStart,
  getListsSuccess,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListssStart());
  try {
    const res = await axios.get("/lists", {
      hearders: {
        token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

// //create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists", list, {
      hearders: {
        token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists" + id, {
      hearders: {
        token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
