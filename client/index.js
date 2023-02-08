import axios from "axios";

const req = async () => {
  try {
    const res = await axios.post("http://localhost:5005/api/v1/users/login", {
      email: "v@gg.com",
      password: "1234",
    });
    const data = await res.data;
  } catch (err) {
    console.log(err.response.data.message);
  }
};
req();
