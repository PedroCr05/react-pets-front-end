import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL / pets}`;

const idx = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

idx();
