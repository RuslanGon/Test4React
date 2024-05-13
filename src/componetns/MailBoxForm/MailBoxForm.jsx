import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';


const formSchema = Yup.object({
  userEmail: Yup.string().required('Enail adress must be').email('You must enter email'),
  userName: Yup.string().required('Name is reguired').max(38, 'your user neme can be 38 simbol'),
  favColor: Yup.string().required('color is reguired').oneOf(['red', 'green', 'blue'])
});

const INITIAL_VALUE = {
  userEmail: "",
  userName: "",
  favColor: ''
}

const MailBoxForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values)
    actions.resetForm()



    //   event.preventDefault();
    //   const userEmail = event.currentTarget.elements.userEmail.value;
    //   const userName = event.currentTarget.elements.userName.value;
    // console.log(userEmail, userName);
    // const formData = {
    //   userEmail,
    //   userName,
    // };
    // onAddUser(formData);
    // event.currentTarget.reset();
  };

  return (
    <Formik
    initialValues={INITIAL_VALUE}
    onSubmit={handleSubmit}
    validationSchema={formSchema} >
    <Form>
      <h2>Add new users</h2>
      <label>
        <span>User email</span>
        <br />
        <Field type="email" name="userEmail" placeholder="@email" />
        <ErrorMessage component="p" name="userEmail" />
      </label>
      <br />
      <label>
        <span>User name</span>
        <br />
        <Field type="text" name="userName" placeholder="name" required />
        <ErrorMessage component="p" name="userName" />
      </label>
      <br />
        <span>favourite color</span>
        <br />
        <label>
          <Field type="radio" name="favColor" value="red" />
          <span>Red:</span>
        </label>
        <label>
          <Field type="radio" name="favColor" value="green" />
          <span>Green:</span>
        </label>
        <label>
          <Field type="radio" name="favColor" value="blue" />
          <span>Blue:</span>
          <ErrorMessage component="p" name="favColor" />
        </label>
      <br />
      <button type="submit"> ▶ Create new users</button>
    </Form>
  </Formik>
  );
};

export default MailBoxForm;
