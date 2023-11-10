import { useFormik } from "formik";
import { formSchema } from "../schemas/yupSchema";

const Form = () => {
  return (
    <form>
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
