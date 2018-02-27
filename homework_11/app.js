var rootNode = document.getElementById("root");

function drawNode(parent, structure, marginLeft) {
	structure.forEach(function (item) {
		var node = document.createElement("div");
		var id = item.title.replace(/\s/g, '_');
		node.id = id;
		node.style.marginLeft = marginLeft + 'px';

		if (item.folder) {
			node.innerHTML = item.title;
			node.classList.add("folder");
		} else {
			node.innerHTML = item.title;
			node.classList.add("file");
		}
		parent.appendChild(node);

		node.addEventListener('click', function (event) {
			event.stopPropagation();
			if (!this.expanded) {
				if (item.children && item.children.length > 0) {
					this.expanded = true;
					drawNode(this, item.children, marginLeft + 10);
				} else if (item.folder) {
					var label = 'this folder is empty';
					var textNode = document.createElement('span');
					textNode.classList.add("placeholderText");
					textNode.innerHTML = label;
					this.appendChild(textNode);
					this.expanded = true;
				}
			} else {
				if (item.folder) {
					this.expanded = false;
					while (this.hasChildNodes() && this.firstChild !== this.lastChild) {
						this.removeChild(this.lastChild);
					}
				}
			}
		})
	})
}

drawNode(document.querySelector('body'), structure, 0);
rootNode.appendChild(node);
