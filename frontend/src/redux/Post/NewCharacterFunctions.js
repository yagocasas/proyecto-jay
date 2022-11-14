import { API } from "../../shared/services/api";

export const postNewCharacter = (formdata) => async (dispatch) => {
    dispatch({ type: "postingCharacter" });
    try {
      await API.post("character/create", formdata);
      dispatch({ type: "postCharacter" });
    } catch (error) {
      dispatch({ type: "postingError", payload: error.message });
    }
  };