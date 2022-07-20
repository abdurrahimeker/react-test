// import ReactDOM from "react-dom/client";
// import Basic from "./App"
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Layout from "./pages/Layout";
// // import Home from "./pages/Home";
// // import Blogs from "./pages/Blogs";
// // import Contact from "./pages/Contact";
// // import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <div>
//       <Basic />
//     </div>
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/" element={<Layout />}>
//     //       <Route index element={<Home />} />
//     //       <Route path="blogs" element={<Blogs />} />
//     //       <Route path="contact" element={<Contact />} />
//     //       <Route path="*" element={<NoPage />} />
//     //     </Route>
//     //   </Routes>
//     // </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Basic = () => (
  <div>
    <h1>Giriş yap</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      }}
      onSubmit={async (values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">Adınız :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Field id="firstName" name="firstName" placeholder="Abdurrahim" />

        <br></br>
        <br></br>


        <label htmlFor="lastName">Soyadınız :</label>&nbsp;&nbsp;
        <Field id="lastName" name="lastName" placeholder="Eker" />

        <br></br>
        <br></br>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById('root'));
