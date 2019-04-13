import axios from "axios";

export default () => {
  const token = localStorage.getItem("token");

  return axios.create({
    header: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
