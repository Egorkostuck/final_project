export function open(open) {
    return {
        type: 'OPEN',
        payload: open
    }
}

export function close(open) {
    return {
        type: 'CLOSE',
        payload: open
    }
}

export function addGoods(goods) {
    return {
        type: 'ADD_GOODS',
        payload: goods
    }
}

export function deleteGoods(id) {
    return {
        type: 'DELETE_GOODS',
        payload: id
    }
}
export function addCount(item) {
    return {
        type: 'ADD_COUNT',
        payload: item
    }
}
export function deleteCount(item) {
    return {
        type: 'DELETE_COUNT',
        payload: item
    }
}
export function addUser(item) {
    return {
        type: 'ADD_USERS',
        payload: item
    }
}

export function changeCity(city) {
    return {
        type: 'CHANGE_CONTACT',
        payload: city
    }
}

export function disableGoods(id, field) {
    return {
        type: 'DISABLE_GOODS',
        payload: [id,field]        
    }
}

export function openGoods(item) {
    return {
        type: 'OPEN_GOODS',
        payload: item     
    }
}

export function addCountInGoods(item) {
    return {
        type: 'ADD_COUNT_IN_GOODS',
        payload: item
    }
}
export function deleteCountInGoods(item) {
    return {
        type: 'DELETE_COUNT_IN_GOODS',
        payload: item
    }
}