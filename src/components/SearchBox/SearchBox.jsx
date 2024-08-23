
import { Formik, Form, Field, ErrorMessage} from "formik";
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
    // <div className={css.div}>
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
      
        <button className={css.button} type="submit">
          Search
        </button>
        </div>
      </Form>
    </Formik>
    // </div>
  );
};
export default SearchBox;

// import toast, { Toaster } from "react-hot-toast";

// import css from "./SearchBox.module.css";

// export default function SearchBox({ onSearch }) {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const form = evt.target;
//     const searchMovie = form.elements.searchMovie.value;

//     if (searchMovie.trim() === "") {
//       toast("Please fill in search folder", {
//         style: {
//           color: "red",
//         },
//       });
//       return;
//     }

//     onSearch(searchMovie);
//     form.reset();
//   };

//   return (
//     <header className={css.header}>
//       <form className={css.form} onSubmit={handleSubmit}>
//         <input
//           className={css.input}
//           type="text"
//           name="searchMovie"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search movies"
//         />
//         <button className={css.btn} type="submit">
//           Search
//         </button>
//         <Toaster />
//       </form>
//     </header>
//   );
// }