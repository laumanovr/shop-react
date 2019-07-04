import {GET_ALL_CARS, UPDATE_INFO} from '../actions/index';

const cars = [
    {
        id: 1,
        name: 'Toyota Camry',
        year: 2014,
        price: 14000,
        image: 'https://www.gannett-cdn.com/-mm-/b1f91535573c38f7da05b41380d9bbe2992d3048/c=499-0-2499-2000/local/-/media/2017/11/02/Bergen/NorthJersey/636452335759402504-082717-D-2018-ToyotaCamryLE.jpg?width=200&height=200&fit=crop'
    },
    {
        id: 2,
        name: 'Lexus Rx 350',
        year: 2012,
        price: 12000,
        image: 'https://www.automoblog.net/wp-content/uploads/2019/06/2020_Lexus_RX_350_F_SPORT_01_B4E7F4FEAA8F76D9F0C90F1188D413C2184E9C3B-200x200.jpg'
    },
    {
        id: 3,
        name: 'Mercedes Benz',
        year: 2011,
        price: 11000,
        image: 'https://cdn.japantimes.2xx.jp/wp-content/uploads/2015/10/p4-sp-mercedez-b-20151028-200x200.jpg'
    },
    {
        id: 4,
        name: 'Porsche Cayenne',
        year: 2015,
        price: 13000,
        image: 'https://www.industryleadersmagazine.com/wp-content/uploads/2018/05/Cayenne-E-Hybrid-2019-Porsche-200x200.jpg'
    }
];

const initState = {
    allCars: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_CARS:
            return Object.assign({}, state, {
                allCars: cars
            });
        case UPDATE_INFO:
            let carState = Object.assign({}, state);
            carState.allCars[Math.floor(Math.random() * 3.9)].price = Math.ceil(Math.random() * 10000) + 1000;
            return carState;
        default:
            return state
    }
};