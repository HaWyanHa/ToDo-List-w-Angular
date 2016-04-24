(function () {
	"use strict";

	angular
		.module("todo", [])
		.controller("todoController", todoController);

	todoController.$inject = ["theList"];

	function todoController(theList) {
		this.all = theList;
		console.log(this.all);

		this.newToDo = {
			name: "",
			complete: false,
			edit: false,
		};

		this.save = function saveToDo(form) {
			console.log("it works", form);
			this.all.push(this.newToDo);
			this.newToDo = {};

			console.log(this.all);
		}

		this.counter = function counter(){
			var count = 0;
			this.all.forEach(function(){
				count = count + 1
			});
			return count;	
		}  //I would like to do this with a filter

		this.findIndexOf = function findIndexOf(object){
			this.all.forEach(function(element, i){
				if (element.$$hashKey === object.$$hashKey) {
				return i;
				}
			})
		}

		this.remove = function remove(todoitem){
			var i = this.findIndexOf(todoitem);
			this.all.splice(i, 1);
		}

		this.finish = function finish (todoitem){
			var i = this.findIndexOf(todoitem);
			if (todoitem.complete) {
				todoitem.complete = false;
			} else{
				todoitem.complete = true;
			}
			console.log(todoitem);
		}
	}

})();