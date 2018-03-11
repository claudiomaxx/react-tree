export const FETCH_NODES = 'FETCH_NODES';
export const ADD_NODE = 'ADD_NODE';

export function fetchNodes(payload) {
    return {
        type: FETCH_NODES,
        payload: payload
    }
}

export function addNodeAction(payload) {
    return {
        type: ADD_NODE,
        payload: payload
    }
}