(function (){
  "use strict";
  angular.module('LunchCheck' , [])
  .controller('LunchCheckController' ,function ($scope) {
     $scope.name = "";
     $scope.totalInput = 0;
     $scope.msg = "";


    $scope.checkInput = function () {
      var input = delimit($scope.menu)
      $scope.totalInput = input;
      var message = chkMessage($scope.totalInput)
      $scope.msg = message;
    };

    function delimit (string) {
      var temp = "";
      var cnt = 0;
      var comma = ',';
      if (string === undefined){
        return false;
      }
      temp = string.split(",");
        for (var i = 0 ; i < temp.length; i++) {
          if (temp[i].trim() != "") {
            cnt ++;
          }
        }
      return cnt;
    }

    function chkMessage (string)
    {
      var message = "";
      if (string == "") {
      message = "Please enter data first"
      return message;
      }
      else if (string <= 3)
      {
        message = "Enjoy!!"
        return message;

      }
      else if (string >= 4) {
        message = "too much!!"
        return message;
      }
      else
         return "no data"
      }


  });
})();
