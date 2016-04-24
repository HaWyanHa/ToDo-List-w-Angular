(function () {
	"use strict";

	angular
		.module("todo", [])
		.controller("todoController", todoController);

	todoController.$inject = ["theList"];

	//this does creates the list and the array
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
			if (form.$valid) {
				this.all.push(this.newToDo);
				this.newToDo = {};
			}
			console.log(this.all);
		}

		this.counter = function counter(){
			var count = 0;
			this.all.forEach(function(data){
				if (!data.complete) {
					count = count + 1
				}
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

		this.edit = function edit (todoitem) {
			var i = this.findIndexOf(todoitem);
			if (todoitem.edit) {
				todoitem.edit = false;
			} else{
				todoitem.edit = true;
			}
		}

		this.enter = function enter (event, todoitem) {
			var i = this.findIndexOf(todoitem);
			if (event.keyCode === 13) {
				console.log("clicked enter");
				todoitem.edit = false;
			}
		}

		this.clear = function clear () {
			console.log("ugh");
		}


	}

})();