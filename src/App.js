import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { getAllCars, updateInfo } from './store/actions/index';

class App extends React.Component {
    constructor() {
        super();
        this.state = {cars: []};
    }

    componentWillMount() {
        this.props.dispatch(getAllCars());
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setState({cars: this.props.cars});
        });

        setInterval(() => {
            this.props.dispatch(updateInfo());
            this.setState({cars: this.props.cars});
        }, 3000)
    }

    render() {
        return (
            <div className="App">
                <h2 className="title">Cars shop</h2>
                <div className="cars">
                    {this.state.cars.map(car =>
                        <div className="car" key={car.id}>
                            <div><img src={car.image} alt=""/></div>
                            <p><b>Name: </b>{car.name}</p>
                            <p><b>Year: </b>{car.year}</p>
                            <p><b>Price: </b>{car.price}$</p>
                        </div>
                    )}
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.allCars
    };
};

export default connect(mapStateToProps)(App);