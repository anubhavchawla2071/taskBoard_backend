import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";


export const addNewTask=async (req,res)=>{
  try {
    const {title,description}=req.body;
    await Task.create({
        title,
        description,
        user:req.user,
    });

    res.status(201).json({
        success:true,
        message:"Task added successfully", 
    })
  } catch (error) {
    next(error);
  }
};

export const getMyTasks=async (req,res)=>{
    try {
        const user_id=req.user._id;

        const tasks=await Task.find({user:user_id});
    
        res.status(200).json({
            success:true,
            tasks,
    
        })
    } catch (error) {
        next(error);
    }
}

export const updateTask=async (req,res,next)=>{
    try {
        const {id}=req.params;
    const task=await Task.findById(id);
    if(!task) 
        return next(new ErrorHandler("Invalid ID",404))

    task.isCompleted= !task.isCompleted;
    await task.save();

    res.status(200).json({
        success:true,
        message:"Task Updated"
    })
    } catch (error) {
        next(error);
    }
}
export const deleteTask=async (req,res,next)=>{
try {
    const {id}=req.params;
    const task=await Task.findById(id);
    if(!task) 
        return next(new ErrorHandler("Task Not found",404));
    await task.deleteOne();

    res.status(200).json({
        success:true,
        message:"Task Deleted"

    })
} catch (error) {
    next(error);
}
}