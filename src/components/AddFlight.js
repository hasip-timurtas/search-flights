import React from 'react'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { createFlight } from '../store/actions'
import { dateTimeNow } from '../store/saga.helpers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as moment from 'moment';

class AddFlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form :{
                departure: '',
                departureTime: dateTimeNow(),
                arrival: '',
                arrivalTime: dateTimeNow(),
                type: 'cheap'
            }
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    onChange(event) {
        this.state.form[event.target.name] = event.target.value;
        this.setState({ form: this.state.form });
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.state.form.arrival === '' || this.state.form.departure === '' ){
            toast.error('Departure and Arrival fields cannot be empty!');
            return;
        }
        if (this.props.flights) {
            this.props.flights.unshift(this.state.form);
            this.props.createFlight(this.props.flights);
            toast.success("Flight Added successfully!");
        }
        else {
            toast.error("Let the list fill first!");
        }

    }

    render() {
       const {departur, departureTime, arrival, arrivalTime, type} = this.state.form
        return (
            <form >
                <ToastContainer />
                <Grid container spacing={24} className="add-flight">
                    <Grid item xs={5}>
                        <Paper className="add-flight">

                            <div className="form-control">
                                <h3>Departure:</h3>
                                <input className='form-control'
                                    name='departure'
                                    type='text'
                                    value={departur}
                                    onChange={this.onChange} required />
                            </div>
                            <br/>
                            <div className="form-control">
                                <h3 >Departure Time:</h3>
                                <input className='form-control'
                                    name="departureTime"
                                    type='datetime-local'
                                    value={departureTime}
                                    onChange={this.onChange}
                                    min={new Date()} required />
                            </div>
                            <br/>
                            <div className="form-control">
                                <h3 >Arrival:</h3>
                                
                                <input className='form-control'
                                    name='arrival'
                                    type='text'
                                    value={arrival}
                                    onChange={this.onChange} required />
                            </div>
                            <br/>
                            <div className="form-control">
                                <h3 >Departure Time:</h3>
                                <input className='form-control'
                                    name="arrivalTime"
                                    type='datetime-local'
                                    value={arrivalTime}
                                    onChange={this.onChange}
                                    min={new Date()} required />
                            </div>
                            <br/>
                            <div className="form-control">
                                <h3>Type :</h3>
                                <label>
                                    <input type="radio" name="type"  value="cheap" checked onChange={this.onChange} />
                                    Cheap
                                </label>
                                <br />
                                <label>
                                    <input type="radio" name="type"  value="business" onChange={this.onChange} />
                                    Business
                                 </label>
                            </div>

                            <br />
                            <Button variant="contained" color="primary" onClick={this.onSubmit} >Submit </Button>
                            </Paper>
                    </Grid>
                   
                </Grid>

                
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    creating: state.creating,
    flights: state.flights
});

const mapDispatchToProps = {
    createFlight: createFlight,
};

AddFlight = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddFlight);


export default AddFlight;

