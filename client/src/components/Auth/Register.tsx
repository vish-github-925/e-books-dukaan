import { Form } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return <section className="h-[300px]">
  <Form
    method="post"
    className="flex flex-col gap-5 items-center border-dotted border-red-500 border p-10
    "
  >
    <label htmlFor="username">
      Username
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        className="border border-green-400"
      />
    </label>
    <label htmlFor="email">
      Email
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border border-green-400"
      />
    </label>
    <label htmlFor="password">
      Password
      <input
        type="text"
        id="password"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="border border-green-400"
      />
    </label>

    <button type="submit">Login</button>
  </Form>
</section>
};
export default Register;
