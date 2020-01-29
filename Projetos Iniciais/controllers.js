parking.controller("parkingCtrl", function ($scope) {
        $scope.showMe = true;
        $scope.appTitle = "Parking";
        $scope.showAlert = true;
        $scope.alertTopic ="Something went wrong";
        $scope.alertMessage = "You must inform the plate and the color of the car!";
        $scope.closeAlert = function(){
        	$scope.showAlert = $false;
        };

        $scope.cars = [];
        $scope.colors = ["White", "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Brown"];
        
        $scope.park = function (car) {
        	car.entrance = new Date();
        	$scope.cars.push(car); 
        };
        
    	$scope.myFunc = function(selectcar) {
        	selectcar.showMe = !selectcar.showMe;
    }
});
      