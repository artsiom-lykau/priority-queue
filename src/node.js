class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
			if(!this.left){
				this.left = node;
				node.parent = this;
			}
			else if(!this.right){
				this.right = node;
				node.parent = this;
			}
	}

	removeChild(node) {
		if(node == this.left){
			this.left = null;
			node.parent = null;
		}
		else if(node == this.right){
			this.right = null;
			node.parent = null
		}
		else{
			throw new Error();
		}
	}

	remove() {
		if(this.parent){
			this.parent.removeChild(this)	
		}
	}

	swapWithParent() {
		if(this.parent){
			let node = this,
				parent = this.parent,
				leftChild = this.left,
				rightChild = this.right,
				parentOfParent = this.parent.parent,
				leftChildOfParent = this.parent.left,
				rightChildOfParent = this.parent.right;

			//обновляем с потомков node и с родителя node на потомков
			if(leftChild){
				leftChild.parent = parent;
				parent.left = leftChild;
			}
			if(rightChild){
				rightChild.parent = parent;
				parent.right = rightChild;
			}

			//...и, если необходимо, соседнюю ветку
			if(leftChildOfParent == node){
				node.left = parent;
				parent.parent = node;
				if(rightChildOfParent){
					rightChildOfParent.parent = node
					node.right = rightChildOfParent;
				}
			}
			else if(rightChildOfParent == node){
				node.right = parent;
				parent.parent = node;
				if(leftChildOfParent){
					leftChildOfParent.parent = node
					node.left = leftChildOfParent;
				}
			}

			//обновляем с родителя родителя node
			if(parentOfParent){
				this.parent = parentOfParent;
				this.parent.parent = this;
				if(parentOfParent.left == parent){
					parentOfParent.left = node
				}
				else if(parentOfParent.right == parent){
					parentOfParent.right = node
				}
			}
		}
	}
}

module.exports = Node;
