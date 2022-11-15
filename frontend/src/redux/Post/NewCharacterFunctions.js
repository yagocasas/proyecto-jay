import { API2 } from "../../shared/services/api";

export const postNewCharacter = (datos) => async (dispatch) => {
    dispatch({ type: "postingCharacter" });
    try {
      console.log(datos)
      const res = await API2.post("characters/create", datos);
      console.log(res)
      dispatch({ type: "postCharacter" });
    } catch (error) {
      dispatch({ type: "postingError", payload: error.message });
    }
  };