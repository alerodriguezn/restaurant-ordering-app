import User from "../models/User.js"
import generateId from "../helpers/generateId.js";

const register = async (req, res) => {

    //Check if user already exist
    const { email } = req.body;
    const userExist = await User.findOne({ email })

    if (userExist) {
        const error = new Error('User Already Exist')
        return res.status(400).json({ msg: error.message })
    }

    try {
        const user = new User(req.body)
        user.token = generateId()
        await user.save()

        //Send confirmation email
        /*emailRegistro({
            email: user.email,
            name: user.name,
            token: user.token
        })*/

        res.json({ msg: "User created successfully, Check your email for corfirm your account" })

    } catch (error) {
        console.log(error)
    }

}


const confirm = async (req, res) => {
    const { token } = req.params


    const confirmUser = await User.findOne({ token })
    if (!confirmUser) {
        const error = new Error("Invalid Token")
        return res.status(403).json({ msg: error.message })
    }

    try {
        confirmUser.confirmed = true
        confirmUser.token = ""
        await confirmUser.save()
        res.json({ msg: "User Confirmed Successfully" })

    } catch (error) {
        console.error(error)
    }

}

export {
    register,
    confirm
}
