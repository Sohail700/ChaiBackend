import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  //first time (i.e. sign up) we have form through which we get data of user
  //then store it in db (mongoDb and postman)
  //after that user can login since we have users credential
});

export { registerUser };
