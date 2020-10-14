const Restaurant=require('/..Models/Restaurant.json');

exports.getRestaurantByCity((req,res,next)=>{
    const cityName=req.params.cityName;
    const result=Restaurant.filter(item => item.city==cityName)
    res.status(200).json({message:"Restaurant fetched successfully",restaurantList:result})
    .catch(err => console.log(err));
})

exports.getRestaurantById((req,res,next)=>{
    const resId=req.params.resId;
    const result=Restaurant.filter(item => item._id==resId)
    res.status(200).json({message:"Restaurant fetched successfully",restaurant:result})
    .catch(err => console.log(err));
})