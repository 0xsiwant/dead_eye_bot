const UserModel = require('../models/userModel');


exports.fetchUserData = async (req,res) => {
    try{    
        const { telegramId, firstName, lastName, username } = req.body;

        const isUser = await UserModel.findOne({telegramId: telegramId});

        if(isUser){
            return res.status(200).json({
                status: 'success',
                message: 'User Data found!',
                userData: isUser
            })
        } 
        else{
            const newUser = UserModel({
                firstName,
                lastName,
                telegramId,
                username,
                balance: 0
            })
            await newUser.save();
            return res.status(200).json({
                status: 'success',
                message: 'Account created successfuly!',
                userData: newUser
            })
        }
    }catch(error){
        console.log("Error", error);
        return res.status(200).json({
            status: 'failed',
            message: 'Internal Server Error'
        })
    }
}

exports.updateBalance = async (req,res) => {
    try{
        const { telegramId, balance } = req.body;

        await UserModel.updateOne(
            { telegramId: telegramId }, 
            { $set: { balance: balance } }
        );

        return res.status(200).json({
            status: 'success',
            message: 'Balance updated successfuly!'
        })
    }catch(error){
        console.log("Error", error);
        return res.status(200).json({
            status: 'failed',
            message: 'Internal Server Error'
        })
    }
}