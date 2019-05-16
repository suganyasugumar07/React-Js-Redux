import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import TrainingDashboard from '../TrainingDashboard/TrainingDashboard.react';
import AdminDashboard from '../AdminDashboard/AdminDashboard.react';


const MyRoutes = () => {

    return (
        <div >
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={TrainingDashboard}></Route>
                <Route exact path='/admin' component={AdminDashboard}></Route>
            </Switch>
            </BrowserRouter>
        </div>
    );

}

export default MyRoutes;