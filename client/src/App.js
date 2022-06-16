import React from 'react';
import TextEditor from './TextEditor';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to={`/documents/${uuidV4()}`} />
          </Route>
          <Route path="/documents/:id" exact>
            <TextEditor />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App