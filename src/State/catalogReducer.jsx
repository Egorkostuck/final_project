// import uniqid from 'uniqid';

import sink1 from './../Assets/img/sinks/sink1.png';
import sink2 from './../Assets/img/sinks/sink2.png';
import sink3 from './../Assets/img/sinks/sink3.png';
import sink4 from './../Assets/img/sinks/sink4.png';
import sink5 from './../Assets/img/sinks/sink5.png';

import mixer1 from './../Assets/img/mixer/mixer1.png';
import mixer2 from './../Assets/img/mixer/mixer2.png';
import mixer3 from './../Assets/img/mixer/mixer3.png';

import kit1 from './../Assets/img/kitchen_stove/kit1.png';
import kit2 from './../Assets/img/kitchen_stove/kit1.png';
import kit3 from './../Assets/img/kitchen_stove/kit1.png';

const initialState = {
    sink: [
        {img: sink1, name: 'Diplomat R 20 lux', id: 'sink01', coast: '17000', count: 1},
        {img: sink2, name: 'Amsterdam 20 grey', id: 'sink02', coast: '10950', count: 1},
        {img: sink3, name: 'Amsterdam black ', id: 'sink03', coast: '11950', count: 1},
        {img: sink4, name: 'New York L 50x40', id: 'sink04', coast: '35000', count: 1},
        {img: sink5, name: 'Amsterdam 25 Dark chocolate', id: 'sink05', coast: '9950', count: 1}
    ],
    mixer: [
        {img: mixer1, name: 'REGINOX JAPURA K1015K', id: 'mixer01', coast: '73500', count: 1},
        {img: mixer2, name: 'REGINOX RAW BRUSHED NICKEL', id: 'mixer02', coast: '60900', count: 1},
        {img: mixer3, name: 'REGINOX NOVA INOX', id: 'mixer03', coast: '75600', count: 1}
    ],
    stove: [
        {img: kit1, name: 'PITT REGINOX FOESSA', id: 'kit01', coast: '43000', count: 1},
        {img: kit2, name: 'REGINOX ELBRUS XL', id: 'kit02', coast: '34500', count: 1},
        {img: kit3, name: 'PITT REGINOX EBEKO', id: 'kit03', coast: '50000', count: 1},
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        
        default: return state
    }
}