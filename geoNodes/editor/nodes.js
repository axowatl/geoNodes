export class Node {
    constructor() {
        /**
         * The category the node belongs to
         * @type {number}
         */
        this.type = 0;
        /**
         * The position of the node
         * @type {object}
         */
        this.position = { x: 0, y: 0 };
        /**
         * The width of the node
         * Height is procedurally calculated
         * @type {number}
         */
        this.width = 100;
        /**
         * True if the node is collapsed
         * @type {boolean}
         */
        this.collapsed = false;
        /**
         * The name of the node
         * @type {string}
         */
        this.name = "";
        /**
         * The inputs to the node
         * @type {Array}
         */
        this.inputs = [];
        /**
         * The outputs to the node
         * @type {Array}
         */
        this.outputs = [];
        /**
         * The UUID of the node
         * @type {number}
         */
        this.uuid = 0;
    }

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
