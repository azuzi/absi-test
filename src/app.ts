//
import express from "express";
//import { revokerRouter } from "./revokerRouter/Revoker.router";
//import { verifierRouter } from "./verifierRouter/Verifier.router";
import { userOnboardRes,userOnboardReq } from "./router/userOnboard.router";
import { authorizeReq,authorizeRes } from "./router/autherization.router";
// rest of the code remains same
const app = express();
const PORT = 5051;
app.use(express.json());
app.use("/ebsi/userOnBoardReq", userOnboardRes);
app.use("/ebsi/userOnBoardRes",userOnboardReq );
app.use("/ebsi/authorizeReq", authorizeReq);
app.use("/ebsi/authorizeRes",authorizeRes );
//app.use("/revocationservicedriver/initialize", initializerRouter);
app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
