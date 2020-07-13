module.exports={
    validateToken:(req,res,next)=>{
        console.log(req.headers)
        if(req.headers['token']=='abc')
        {
            next()
        }
        else
        {
            res.status(401).json([
                "Token is incorrect"
            ]

            )
        }
  
    }

}


