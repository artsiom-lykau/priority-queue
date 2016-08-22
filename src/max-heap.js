const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		return (!this.root && !this.parentNodes.length)
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		this.parentNodes.push(node);
		this.root ? this.parentNodes[0].appendChild(node) : this.root = node;
		if(this.parentNodes[0].right){
			this.parentNodes.shift();
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
