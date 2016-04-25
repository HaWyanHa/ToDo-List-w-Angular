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
				this.newToDo = {
					name: "",
            		complete: false,
            		edit: false,
				};
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

		this.clear = function clear (data) {
			var that = this;
			this.all.forEach(function(element, i){     //I feel like I could use the function that I already made earlier here but I don't know how.
				if (element.complete === true) {
					that.all.splice(i, 1);

				};
			})
		}

		this.completedItem = function completedItem () {
			this.filter = {complete: true};
			
			this.allActive = false;
			this.incompleteActive = false;
			this.completeActive = true;
		}

		this.showAll = function showAll () {
			this.filter = false;
			
			this.allActive = true;
			this.incompleteActive = false;
			this.completeActive = false;
			// if (this.Active) {
			// 	this.Active = false;
			// 	}else {
			// 		this.Active = true;
			// 	}
			// console.log(this.Active);
		}

		this.showActive = function showActive() {
			this.filter = {complete: false};

			this.allActive = false;
			this.incompleteActive = true;
			this.completeActive = false;
		}


	}

})();