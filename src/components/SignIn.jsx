import { useNavigate } from "react-router-native";

import SignInContainer from "./SignInContainer";
import useSignIn from "../hooks/useSignIn";

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log("error", e.message);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
