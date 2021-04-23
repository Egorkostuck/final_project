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