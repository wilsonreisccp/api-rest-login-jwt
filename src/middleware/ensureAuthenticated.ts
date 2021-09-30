import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"


export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
  const authToken = req.headers.authorization

  if(!authToken){
    return res.status(401).json({
      message: "Token is missing"
    })
  }

  // authToken traz uma string "Bearer " e o token em si 
  const [, token] = authToken.split(" ")

  try {
    verify(token, "c85ad3a5-d96c-4d59-b375-1664889e70b4")

    return next()
  } catch (error) {
    return res.status(401).json({
      //"token": token,
      message: "Token invalid"
    })
  }
  

}