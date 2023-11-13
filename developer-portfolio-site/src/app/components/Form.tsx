"use client";

import { useFormik } from "formik";
import { formSchema } from "../schemas/yupSchema";
import { FormValues, FormActions } from "../../../types";
import { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";

const Form = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmit = async (values: FormValues, actions: FormActions) => {
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
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      } else {
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 3000);
      }

      actions.resetForm();
    } catch (error) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
    }
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
      email: "",
      message: "",
    },
    onSubmit,
    validationSchema: formSchema,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:w-[500px] p-5 text-center w-[400px]"
      noValidate
    >
      {successMessage && (
        <div
          role="status"
          className="bg-green-700 gap-4 border-2 border-black dark:border-white flex px-4 py-3 rounded-2xl items-center justify-center"
        >
          <p className="regular-16 text-white">
            Form has been sent. Thank you!
          </p>
          <GiConfirmed size={20} color="white" />
        </div>
      )}

      {errorMessage && (
        <div
          role="status"
          className="bg-red-700 gap-4 px-4 py-3 rounded-2xl border-2 flex border-black dark:border-white items-center justify-center"
        >
          <p className="regular-16 text-white">
            There was a problem. Please try again.
          </p>
          <BiErrorCircle size={20} color="white" />
        </div>
      )}
      <label className="bold-20" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        className="border-2 p-2 rounded-lg"
        type="text"
        placeholder="Enter your name"
      />

      <label className="bold-20" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        className="border-2 p-2 rounded-lg"
        type="email"
        placeholder="Enter your email"
      />

      <label className="bold-20" htmlFor="name">
        Message
      </label>
      <textarea
        id="message"
        rows={6}
        className="border-2 p-2 rounded-lg "
        placeholder="Write a message..."
      />
      <button
        type="submit"
        className="btn-submit bold-20 uppercase shadow-button dark:shadow-dark ease-in-out duration-300"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
