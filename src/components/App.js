import React from "react";
import ListFlights from './ListFlights'
import AddFlight from './AddFlight'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import '../assets/css/style.scss';
import { Route, Link } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      addFlightButton: 'Add Flight',
      addFlight: false
    };
  }
  render() {
    const { addFlight } = this.state;
    return (
      <div className="container">
        <AppBar position="static">
          <Toolbar>
              <Link to={'/'} className="menu"> Flights List </Link>
              <Link to={'/add-flight'} className="menu"> Add Flight </Link>
          </Toolbar>
        </AppBar>
        <Grid>
          <Grid item xs={12}>
            <Paper>
                <Route exact path="/" render={(props) => <ListFlights />} />
                <Route exact path="/add-flight" render={(props) => <AddFlight />} />  
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
