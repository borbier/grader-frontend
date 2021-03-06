import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProblemList from '../ProblemList';
import ProblemItem from '../ProblemItem';

class Problem extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/problems" component={ProblemList}/>
                <Route path={"/problems/:id"} component={ProblemItem} />
            </Switch>
        )
    }
}

export default Problem