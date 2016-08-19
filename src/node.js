class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
			if(this.left == null){
				this.left = node
			}
			else{
				this.right = node
			}
		//TODO if left & right exist
	}

	removeChild(node) {
		if(node == this.left){
			this.left = null
		}
		else if(node == this.right){
			this.right = null
		}
		else if(node != this.right && node != this.left){
			throw new Error();
		}
	}

	remove() {
		if(this.parent != null){
			//TODO
		}
	}

	swapWithParent() {
		if(this.parent != null){
			//TODO
		}
	}
}

module.exports = Node;
