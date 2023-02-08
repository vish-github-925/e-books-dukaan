import { useState } from "react";
import { Form } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="min-h-screen">
      <Form
        method="post"
        className="flex flex-col gap-5 items-center border-dotted border-red-500 border p-10
        "
      >
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

        <button
          type="submit"
          className="bg-green-400 py-1 w-min px-4 rounded-lg hover:bg-green-700 hover:text-white
        "
        >
          Login
        </button>
      </Form>
    </section>
  );
};
export default Login;
