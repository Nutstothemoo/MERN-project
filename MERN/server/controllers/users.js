import User from "../models/User.js"


export const getUser = async (req, res) => {
    try {
        const {id}= req.params;
        const user = await User.findById(id);
        res.status(200).json(user);

    } catch {
        res.status(400).json({message: err.message})
    }
}
export const getUserFriends = async (req, res) => {
    try {
        const {id}= req.params;
        const user = await User.findById(id);        
        res.status(200).json(user);

        const friends = await Promise.all(
            user.friends.map((id)=> User.findById(id))
        );

        const formattedFriends = friends.map(({_id, firstName, lastName}))

    } catch {
        res.status(400).json({message: err.message})
    }
}