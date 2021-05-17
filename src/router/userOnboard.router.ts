import express, { Request, Response } from "express";

import { userOnBoardAuthRes,userOnBoardAuthReq } from "../userOnboardAuth";

export const userOnboardReq = express.Router();

userOnboardReq.post("/", async (req: Request, res: Response) => {
  try {
    const response =await  userOnBoardAuthReq();
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

export const userOnboardRes = express.Router();

userOnboardRes.post("/", async (req: Request, res: Response) => {
  try {
    const response =await  userOnBoardAuthRes();
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
