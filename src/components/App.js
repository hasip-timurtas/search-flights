import React from "react";
import ListFlights from './ListFlights'
import AddFlight from './AddFlight'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import '../assets/css/style.scss';
import { Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <AppBar position="static">
          <Toolbar>
              <Link to={'/'} className="menu"> Flights List </Link>
              <Link to={'/add-flight'} className="menu"> Add Flight </Link>
          </Toolbar>
        </AppBar>
        <Paper>
            <Route exact path="/" render={(e) => <ListFlights />} />
            <Route exact path="/add-flight" render={(e) => <AddFlight />} />  
        </Paper>
      </div>
    );
  }
}

export default App;
