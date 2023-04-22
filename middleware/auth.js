
const jwt = require('jsonwebtoken')

const auth = async (req,res,next)=>{
try {
  const token = req.header('auth')
  if(!token) return res.status(400).send({errors:true,message:'user does not exist'})
  
  const verifiedToken = await jwt.verify(token,process.env.SEC)
  if(!verifiedToken) return res.status.send({errors:true,message:'Invalid user'})

  next()
} catch (error) {
    return res.status(400).send({errors:true,message:error.message})
}
}

module.exports = auth 