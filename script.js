document.addEventListener("DOMContentLoaded", function(){

	document.querySelector("button").addEventListener("click", function(){
		event.preventDefault();
		var value = document.querySelector("input").value;
		var newLi = document.createElement("li");
		newLi.innerText = value;
		newLi.addEventListener("click", function(){
			newLi.classList.toggle("completed");
		});
		document.querySelector("ul").appendChild(newLi);

	});

});