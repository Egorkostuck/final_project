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
        type: 'ADD_GOODS',
        payload: id
    }
}