import React from 'react';
import { BrowserRouter, Switch, Route }  from 'react-router-dom';
import Main from './pages/Main';
import Form from './pages/Form';
import Profile from './pages/Profile';
import Edit from './pages/Edit';



function Routes() {

    return (

        <BrowserRouter>
            <Switch>
                    <Route  path="/" exact  component={Main}/>
                    <Route  path="/form" exact  component={Form}/>
                    <Route  exact path="/profile/:id"   component={Profile}/>
                    <Route  exact path="/edit/:id"   component={Edit}/>
            </Switch>
        
        </BrowserRouter>
    );
};

export default Routes;