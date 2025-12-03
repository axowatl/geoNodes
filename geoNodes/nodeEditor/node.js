export class Node {
    /**
     * The category the node belongs to
     * @type {number}
     */
    type = null;
    /**
     * The position of the node
     * @type {object}
     */
    position = { x: 0, y: 0 };
    /**
     * The width of the node
     * Height is procedurally calculated
     * @type {number}
     */
    width = 100;
    /**
     * True if the node is collapsed
     * @type {boolean}
     */
    collapsed = false;
    /**
     * The name of the node
     * @type {string}
     */
    name = "";
    /**
     * The inputs to the node
     * @type {Array}
     */
    inputs = [];
    /**
     * The outputs to the node
     * @type {Array}
     */
    outputs = [];
    /**
     * The UUID of the node
     * @type {number}
     */
    uuid = 0;

    createElement() {
        const nodeElem = document.createElement('div');
        nodeElem.style.width = `${this.width}px`;
        nodeElem.style.height = '20px';
        nodeElem.style.borderTopLeftRadius = '4px';
        nodeElem.style.borderTopRightRadius = '4px';
        nodeElem.style.borderBottomLeftRadius = '0px';
        nodeElem.style.borderBottomRightRadius = '0px';
        nodeElem.style.position = 'absolute';
        nodeElem.style.left = '40px';
        nodeElem.style.top = '40px';
        nodeElem.style.backgroundColor = '#FF0000';
        document.body.appendChild(nodeElem);
    }
}
