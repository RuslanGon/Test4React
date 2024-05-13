import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';



const searhProductchema = Yup.object({
    serchTerm: Yup.string().required('enter search product')
});
const INITIAL_VALUE = {
    serchTerm: ''
}
const SearchProducts = ({ onSearchProduct }) => {
  const handleSubmit = (values) => {
    // console.log(values);
    onSearchProduct(values.serchTerm)
  };

  return (
    <Formik
    initialValues={INITIAL_VALUE}
    onSubmit={handleSubmit}
    validationSchema={searhProductchema} >
    <Form>
      <h2>Search products</h2>
      <label>
        <Field type="text" name="serchTerm" placeholder="Search" />
        <ErrorMessage component="p" name="serchTerm" />
      </label>
      <br />
      <button type="submit" aria-label="Searh"> ▶ Searсh products</button>
    </Form>
  </Formik>
  );
};

export default SearchProducts;
