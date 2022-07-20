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
  import { Formik } from 'formik';
  
  function App() {
    return (
      <div className='App'>
        <h1>Giriş yap</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            gender: 'erkek'
          }}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({handleSubmit , handleChange ,values}) =>(
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">Adınız :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input id="firstName" name="firstName" onChange={handleChange} placeholder="Abdurrahim" />
  
            <br></br>
            <br></br>
  
  
            <label htmlFor="lastName">Soyadınız :</label>&nbsp;&nbsp;
            <input id="lastName" name="lastName" onChange={handleChange} placeholder="Eker" />
  
            <br></br>
            <br></br>
            
            <span>Erkek</span>
            <input type="radio" name='gender' value="erkek" onChange={handleChange} checked={values.gender === 'erkek'}/>
            <span>Kadın</span>
            <input type="radio" name='gender' value="kadın" onChange={handleChange} />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit">Submit</button>
          </form>
          )}
        </Formik>
      </div>
  );
  
}
ReactDOM.render(<App />, document.getElementById('root'));