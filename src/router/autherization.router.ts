import express, { Request, Response } from "express";

import { authorizationRes,authorizationReq } from "../authorization";

export const authorizeReq = express.Router();

authorizeReq.post("/", async (req: Request, res: Response) => {
  try {
    const response =await  authorizationReq();
    //console.log(req.body.data)
    //const response = await initializer.initialize(req.body.credential);
    try {
      console.log(response)
      res.send(response);
    } catch (e) {
      res.status(500);
    }
  } catch (error) {
    console.log("error");
    console.log(error);
    res.status(500).send(error);
  }
});

export const authorizeRes = express.Router();

authorizeRes.post("/", async (req: Request, res: Response) => {
  try {
    const response =await  authorizationRes();
    //console.log(req.body.data)
    //const response = await initializer.initialize(req.body.credential);
    try {
      console.log(response)
      res.send(response);
    } catch (e) {
      res.status(500);
    }
  } catch (error) {
    console.log("error");
    console.log(error);
    res.status(500).send(error);
  }
});
