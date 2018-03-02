var mainDiv = document.createElement("div");
root.append(mainDiv);

function function_name(tanks, mainDiv) {
	var p = document.createElement("p");
	p.textContent += "Most popular tanks";
	mainDiv.appendChild(p);
	var ul = document.createElement("ul");
	mainDiv.appendChild(ul);
	for (var i = 0; i < tanks.length; i++) {
		var li = document.createElement("li");
		ul.appendChild(li);
		var div = document.createElement("div");
		li.appendChild(div);
		var name = document.createElement('i');
		name.classList.add("name");
		div.appendChild(name);
		var icon = document.createElement('img');
		icon.classList.add("icon");
		icon.src = tanks[i].country_image;
		name.append(icon);
		name.append(" " + tanks[i].level + " " + " " + tanks[i].model);
		var a = document.createElement("a");
		div.appendChild(a);
		var img = document.createElement('img');
		img.classList.add("image");
		img.src = tanks[i].preview;
		a.appendChild(img);
		a.appendChild(icon);
		a.appendChild(name);
	}
}

function_name(tanks, mainDiv);