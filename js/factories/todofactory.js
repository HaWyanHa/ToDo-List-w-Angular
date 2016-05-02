(function () {
	"use strict";

	angular
		.module("todo")
		.factory("theList", theList);

	var list = [
		// {
		// 	"name": 3232,
		// 	"complete": false,
		// 	"edit": false
		// }

	];

	var localStorageKey = "todo-angular";     //this is to set the todo in an object, so I can retrieve it easily
  	if (!localStorage.getItem(localStorageKey)) {
    localStorage.setItem(localStorageKey, angular.toJson(list));  //because this is angular you need a "angular.toJson"
  	}

  	function saveAllItems(items) {
    localStorage.setItem(localStorageKey, angular.toJson(items));
  	}

  	function theList() {
	    return {
	      data: JSON.parse(localStorage.getItem(localStorageKey)),
	      save: saveAllItems
	    };
  	}

})();