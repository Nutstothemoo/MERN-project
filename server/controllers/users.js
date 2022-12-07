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

        const formattedFriends = friends.map(({_id, firstName, lastName , occupation, location, picturePath})=>{
            return {_id, firstName, lastName , occupation, location, picturePath}
        });


        res.status(200).json(formattedFriends);

        } catch(err) {
            res.status(404).json({message: err.message})
        }
    }
    // UPDATE

    export const addRemoveFriend = async (req,res)=>{

        try {
            const {id, friendId}= req.params
            const user =  await User.findById(id);
            const friend = await User.findById(friendId);

            if (user.friends.includes(friendId)){
                user.friends = user.friends.filter((id)=>{ id !== friendId})
                friend.friends = friend.friends.filter((id)=>{ id !== id})
            } else {
                user.friends.push(friendId)
                friend.friends.push(id);
            }
            await friend.save();
            await user.save();

            const friends = await Promise.all(
                user.friends.map((id)=> User.findById(id))
            );
    
            const formattedFriends = friends.map(({_id, firstName, lastName , occupation, location, picturePath})=>{
                return {_id, firstName, lastName , occupation, location, picturePath}
            });
    
            res.status(200).json(formattedFriends); 
            // ON ENVOIE AU FRONTEND  la liste de friend mise a jour  

        } catch(err) {
            res.status(404).json({message: err.message})
        }
    }
    