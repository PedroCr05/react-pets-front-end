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
    const createPet = await axios.post(BASE_URL, {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export { index };
