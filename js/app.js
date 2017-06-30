var myApp = angular.module("myApp", []);
myApp.controller("myController",function($scope){
	console.log("In mycontroller");
	$scope.newUser={};
	$scope.clickedUser={};

	$scope.users= (
	{username:"Astha Sharma",email:"yastha.as@gmail.com"}
	{username:"Raynu Maharjan",email:"sharmastaranjani@gmail.com "}
	{username:"Arya Rimal",email:"erikamaharjan.2016@gmail.com"}
	);

$scope.saveUser= function(){
$scope.users.push($scope.newUser);
$scope.newUser={};
};

$scope.selectUser= function(user){
	console.log(user);
	$scope.clickedUser= user; 

};
$scope.updateUser= function(){

$scope.deleteUser=function(){
$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);

};


});