const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;
import axios from "axios";

const index = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const create = async (formData) => {
  try {
    const res = await axios.post(BASE_URL, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const update = async (formData, id) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, formData, id);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export { index, create, update };
