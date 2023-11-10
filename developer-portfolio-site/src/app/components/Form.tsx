import { useFormik } from "formik";
import { formSchema } from "../schemas/yupSchema";
import { FormValues } from "../../../types";

const Form = () => {
  const onSubmit = async (
    values: FormValues,
    actions: { resetForm: () => void }
  ) => {
    try {
      const response = await fetch("/api/handleEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });
      if (response.ok) {
      } else {
      }

      actions.resetForm();
    } catch (error) {}
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      emil: "",
      message: "",
    },
    onSubmit,
    validationSchema: formSchema,
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="Enter your name" />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Enter your emal" />

      <label htmlFor="name">Message</label>
      <textarea id="message" placeholder="Write the message..." />
    </form>
  );
};

export default Form;
