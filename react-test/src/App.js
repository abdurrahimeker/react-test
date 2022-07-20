

  // setTimeout(() => {
  //   console.log("deneme");
  // }, 2000)

  // setInterval(() => {
  //   console.log("deneme");
  // }, 1111)

  // const sayı = (cb) => {
  //   cb();
  // };

  // sayı(() => {
  //   console.log("eker")
  // })


  // const users = [ 
  //   {
  //     id: 1,
  //     name:'ahmet',
  //     surname:'eker',
  //   },
  //   {
  //     id: 2,
  //     name:'mehmet',
  //     surname:'eker',
  //   },
  //   {
  //     id: 3,
  //     name:'mahmut',
  //     surname:'eker',
  //   }
  // ]


  // push işlemi arraye yeni eleman
  // users.push('ekr')
  // users.push('ekrdfsfds')

  // map işlemi array içinde gezinme
  // users.map((x) => {
  //   console.log(x.surname)
  // })

  // find işlemi verdiğimiz koşula uygun arrayi getirir
  // const result = users.find((x) => x.id == 1)
  // console.log(result)

  // filter işlemi verdiğimiz koşula uygun olani filtreler
  // const filtered = users.filter((x) => x.name == "mahmut");
  // console.log(filtered)

  // some işlemi verdiğimiz komut doğruysa true değilse false
  // const some = users.some((x) => x.surname == "yıldız");
  // console.log(some)

  // every işlemi verdiğimiz komut için bütün arrayler doğruysa true değilse false
  // const every = users.every((x) => x.name == "ahmet")
  // console.log(every);

  // includes komutu arrayın içinde varsa true yoksa false
  // const meyveler = ['muz','armut','elma']
  // const includes = meyveler.includes("elma")
  // console.log(includes);

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Formik, Field, Form } from 'formik';
  
  const Basic = () => (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />
  
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
  
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
  
  ReactDOM.render(<Basic />, document.getElementById('root'));
  