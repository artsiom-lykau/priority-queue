const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.size++;
	}

	pop() {

	}

	detachRoot() {
		let root = this.root;
		this.root = null;
		return root
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
		this.size = 0;
	}

	insertNode(node) {
		this.root ? this.parentNodes[0].appendChild(node) : this.root = node;
		this.parentNodes.push(node);
		if(this.parentNodes[0].right){
			this.parentNodes.shift();
		}
	}

	shiftNodeUp(node) {
		if(node.parent){
			this.parentNodes.forEach(function(item, i, arr){
				if(item == node.parent){
					arr[i] = node;
				}
				else if(item == node){
					arr[i] = node.parent;
				}
			})
			if(node.priority > node.parent.priority){
				node.swapWithParent();
				this.shiftNodeUp(node);
			}
			else{
				this.root = node;
			}
		}

	}

	shiftNodeDown(node) {
		if(node){
			if(node.left.priority > node.right.priority){

			}
			else if(node.left.priority < node.right.priority){
				
			}
		}
	}
}

module.exports = MaxHeap;
