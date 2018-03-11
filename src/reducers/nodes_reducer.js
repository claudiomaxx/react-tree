import { FETCH_NODES, ADD_NODE } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_NODE:

            const newNode = parseInt(action.payload, 10);

            if (Object.keys(state).length === 0) { // add the first node
                return {
                    v: newNode
                };

            } else {
                return addNodeRecursive({ ...state }, newNode);
            }

        case FETCH_NODES:
            return state;

        default:
            break;
    }

    return state;
};


function addNodeRecursive(currentNode, newNode) {
    if (newNode < currentNode.v) {
        if (currentNode.l) {
            currentNode.l = addNodeRecursive(currentNode.l, newNode);

        } else {
            currentNode.l = {
                v: newNode
            };
        }

    } else if (newNode > currentNode.v) {
        if (currentNode.r) {
            currentNode.r = addNodeRecursive(currentNode.r, newNode);

        } else {
            currentNode.r = {
                v: newNode
            }
        }
    }

    return currentNode;
}
