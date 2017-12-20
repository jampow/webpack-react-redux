import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
    <div>
        { Routes }
        <footer className={footer}>
            <Link to="/">Filterable Table</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
        </footer>
    </div>;

export default App;
