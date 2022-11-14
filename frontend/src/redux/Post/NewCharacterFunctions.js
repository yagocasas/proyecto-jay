import { API } from "../../shared/services/api";

export const postNewCharacter = (formdata) => async (dispatch) => {
    dispatch({ type: "postingCharacter" });
    try {
      console.log(formdata)
      const res = await API.post("characters/create", formdata);
      console.log(res)
      dispatch({ type: "postCharacter" });
    } catch (error) {
      dispatch({ type: "postingError", payload: error.message });
    }
  };