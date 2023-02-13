import jwt  from "jsonwebtoken";

export const verifyToken = async (req, res, next)=> {
    try {
        let token = req.header("Authorization");
        if(!token){
            return res.status(403).send("Accès Interdit");
        }

        if(token.startsWith("Bearer ")){
            token = token.slice(7, token.length).trimLeft();
            console.log(`token slice :${token}`)
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log(`req user : ${req.user}`)
        console.log(`verified : ${verified}`)
        req.user = verified;
        next();
        
    } catch(err) {
        console.log("coucou", err)
        res.status(500).json({error: err.message})
    }
}