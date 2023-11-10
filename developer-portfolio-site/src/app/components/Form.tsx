import { useFormik } from "formik";
import { formSchema } from "../schemas/yupSchema";

const Form = () => {

const onSubmit = async (
    
)

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
