import React, {Fragment} from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Link
} from "react-router-dom";

const Navigation = () => (
    <ul style={{display: "flex", justifyContent: "space-around" }}>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/admin"> Admin Page </Link></li>
        <li><Link to="/user"> User Page </Link></li>
    </ul>
);

const HomeComponent = () => (
    <h1>Selamat datang</h1>
);

const AdminComponent = () => (
    <h1>Hai Admin, Kamu cantik deh!</h1>
);

const UserComponent = () => (
    <h1>Hai user, Jomblo kan!</h1>
);

const MainRouter = () => (
    <Router>
        <Fragment>
            <Navigation/>
            <Route path="/" component={HomeComponent} exact={true} />
            <Route path="/admin" component={AdminComponent} />
            <Route path="/user" component={UserComponent} />
        </Fragment>
    </Router>
);

export default MainRouter;
