import { useState } from "react";

function useForm(initialValues = {}, onSubmit) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof onSubmit === "function") {
      onSubmit(values);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useForm;