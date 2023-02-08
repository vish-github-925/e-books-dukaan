import axios from "axios";

const req = async () => {
  try {
    const res = await axios.post("http://localhost:5005/api/v1/users/login", {
      email: "v@g.com",
      password: "1234",
    });
    const data = await res.data;
    console.log("data", data);
  } catch (err) {
    console.log(err);
  }
};
req();
