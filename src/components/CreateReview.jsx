import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import ReviewForm from "./Form/ReviewForm";
import useSubmitReview from "../hooks/useSubmitReview";

const validationSchema = yup.object().shape({
  repositoryOwner: yup.string().required("Repository owner is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .typeError("You must specify a number")
    .min(0, "Rating must be a number between 0 and 100")
    .max(100, "Rating must be a number between 0 and 100")
    .required("Rating is required"),
  review: yup
    .string()
    .min(4, "Username must be at least ${min} characters long"),
});

const initialValues = {
  repositoryOwner: "",
  repositoryName: "",
  rating: "",
  review: "",
};

const styles = StyleSheet.create({
  padding: 10,
  backgroundColor: "white",
});

const CreateReview = () => {
  const navigate = useNavigate();
  const submitReview = useSubmitReview();

  const onSubmit = async (values) => {
    try {
      const repoId = await submitReview(values);
      navigate(`/repositories/${repoId}`);
    } catch (e) {
      console.log("error:", e.message);
    }
  };

  return (
    <View style={styles}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default CreateReview;
