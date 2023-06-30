import jwt from 'jsonwebtoken'

const auth = (req,res,next)=>{   // req is having token or not, if req have token then check is valid or not . if valid then 
                                //we are allowing next , next is a callback function which allows every controllers will be executed.
                                //now this next will be every controller.only this auth function satisfies then every controller will executed
    try {
        const token = req.headers.authorization.split(' ')[1]
        let decodedData = jwt.verify(token,process.env.JWT_TOKEN)//here chek that token valid or not
        req.userId = decodedData?.id //we are setting new value userId to req with decodedData
        next()
    } catch (error) {
        console.log('error')
    }
    
}

export default auth;