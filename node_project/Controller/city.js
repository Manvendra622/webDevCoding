const city=require('/..Models/City.json');

exports.getcityList((req,res,next)=>{
    res.status(200).json({message:"city fetched successfully",city:city})
})