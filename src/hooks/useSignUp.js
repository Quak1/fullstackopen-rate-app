import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate] = useMutation(CREATE_USER);

  const submit = async (values) => {
    const { username, password } = values;

    const { data } = await mutate({
      variables: {
        user: {
          username,
          password,
        },
      },
    });

    return data.createUser.id;
  };

  return submit;
};

export default useSignUp;
