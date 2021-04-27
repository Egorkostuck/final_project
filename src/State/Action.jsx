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