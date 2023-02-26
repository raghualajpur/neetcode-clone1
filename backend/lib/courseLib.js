const courseModel=require("../models/courseModel")
module.exports.getAllCourses= async function(){
    return await courseModel.find({});
}
module.exports.createFirstCourse= async function(){
    const courses=await courseModel.find({})
    if(courses && courses.length>=1)return;
    const firstCourse={
        "title":"bz DSA",
        "level":"Easy",
    }
    const course=new courseModel(firstCourse)
    await course.save();
}