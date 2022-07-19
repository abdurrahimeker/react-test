

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

  import React from "react";
  import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
  
  export default function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
