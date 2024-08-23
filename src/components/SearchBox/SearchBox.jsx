
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  const searchId = useId();

  const contactsSchema = Yup.object().shape({
    text: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required!"),
  });

  function handleSubmit(values, action) {
    const { text } = values;
    onSearch(text);
    action.resetForm();
  }

  return (
    <Formik
      initialValues={{ text: "" }}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <Field
            className={css.textSearch}
            type="text"
            name="text"
            placeholder="Search movie"
            id={searchId}
          />
          <ErrorMessage className={css.error} name="text" component="p" />
        </div>
        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};
export default SearchBox;
