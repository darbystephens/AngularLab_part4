(function(){
console.log("form connect");

  var taskForm = {
    bindings:{

    },
    templateUrl:"partials/taskForm.html",
    controller: function (){
      var $ctrl = this;
      $ctrl.todoList = [];
      $ctrl.add = function(task){
        $ctrl.todoList.push({task});
      }
    }
  };

  angular.module("App")
  .component("taskForm", taskForm);
})();
