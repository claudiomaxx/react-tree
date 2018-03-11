import React from 'react';

const Node = ({ nodes, parent }) => {

    const { v, l, r } = nodes;

    function renderNode(node, className) {
        if (node) {
            return (
                <span className={className}>
                    <Node nodes={node} />
                </span>
            );
        }

        return null;
    }

    return (
        <span>
            {v && <span className="node-center">{v}</span>}
            {renderNode(l, 'node-left')}
            {renderNode(r, 'node-right')}
        </span>
    );

};

export default Node;