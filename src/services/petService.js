const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;
import axios from "axios";

const index = async () => {
  try {
    const res = await axios.get(BASE_URL);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { index };
