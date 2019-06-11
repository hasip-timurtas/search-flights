import React from 'react'
import { connect } from 'react-redux'
import { getFlights } from '../store/actions'
import { Table } from "antd";
import "antd/dist/antd.css";
import * as moment from 'moment';

const columns = [
    {
        title: "Departure",
        dataIndex: "departure",
        key: "departure",
        sorter: (a, b) => a.departure.localeCompare(b.departure),
        sortDirections: ["descend", "ascend"]
    },
    {
        title: "Departure Time",
        dataIndex: "departureTime",
        key: "departureTime",
        render: (value, row, index) => moment(value).format('LLLL')
    },
    {
        title: "Arrival",
        dataIndex: "arrival",
        key: "arrival",
        sorter: (a, b) => a.arrival.localeCompare(b.arrival),
        sortDirections: ["descend", "ascend"]
    },
    {
        title: "Arrival Time", 
        dataIndex: "arrivalTime",
        key: "arrivalTime",
        render: (value, row, index) => moment(value).format('LLLL')
    },
    {
        title: "type",
        dataIndex: "type",
        key: "type",
        sorter: (a, b) => a.type.localeCompare(b.type),
        sortDirections: ["descend", "ascend"]
    }
  ];
  


class FlightsList extends React.Component {
    componentWillMount() {
        if(!this.props.flights)
        this.props.getFlights();
    }

    render() {
        const { flights, loading } = this.props;

        if (loading) {
            return <div> Flights Loading...</div>;
        } else {
            return (
                <div>
                    <Table bordered 
                        columns={columns}
                        dataSource={flights}
                        loading={this.props.loading}
                    />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading,
    flights: state.flights
});

const mapDispatchToProps = {
    getFlights: getFlights,
};

FlightsList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FlightsList);


export default FlightsList;
