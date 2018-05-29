import React from 'react';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
)

const Welcome = ({ match }) => (<h1>Welcome to the best contacts app!</h1>);

const Contacts = ({ match }) => (
  <div>
    <ul>
      <li><Link to={`${match.path}/sooyun`}>soo yun</Link></li>
      <li><Link to="/contacts/jiwon">jiwon</Link></li>
      <li><Link to="/contacts/taehyung">tae hyung</Link></li>
    </ul>

    <Route
      exact
      path={`${match.path}`}
      render={() => <h3>Please select a contact</h3>}
    />
    <Route path={`${match.path}/:contactName`} component={Contact} />
  </div>
)

const Contact = ({ match }) => (
  <h3>Your contact name is: {match.params.contactName}</h3>
);

export default App;
