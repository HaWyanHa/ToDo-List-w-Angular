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

	function theList(){
		return list;
	}

	var localStorageKey = "todo-angular";
  	if (!localStorage.getItem(localStorageKey)) {
    localStorage.setItem(localStorageKey, JSON.stringify(list))
  	}

  	function saveAllItems(items) {
    localStorage.setItem(localStorageKey, angular.toJson(items));
  	}

  	function supplyStore() {
	    return {
	      data: JSON.parse(localStorage.getItem(localStorageKey)),
	      save: saveAllItems
	    };
  	}

})();