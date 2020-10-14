const express=require('express');

var cityController=require('/..Controller/city');
var mealtypeController=require('/..Controller/mealtype');
var restBycityController=require('/..Controller/restBycity');

const router=express.router();

router.get('/citylist',cityController.getCityList);
router.get('/restaurantByCity',restBycityController.getRestaurantBycity);
router.get('/mealtype',mealtypeController.getMealType);
router.get('/getresById/:resId',restaurantController.getRestaurantById);

module.exports=router;
