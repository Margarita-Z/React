import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './Nav';
import { Comments } from './comments';

export function App() {

    return (
        <div id="app">
            <h2>App</h2>
            <Nav />
            <Switch>
                <Route path="/comments" component={Comments} />
            </Switch>
        </div>
    )
}
