import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
const registerUser = asyncHandler(async (req, res) => {
  //first time (i.e. sign up) we have form through which we get data of user frontend.
  //validation - not empty.
  //check if user already exists.
  //check for images, check for avatar.
  //then store it in db (mongoDb and postman).
  //upload them to cloudinary, avatar.
  //create user object - create entry in db.
  //remove password and refresh token field from response.
  //check for user creation.
  // return res.
  //after that user can login since we have users credential.

  const { fullname, email, username, password } = req.body;

  console.log("email: ", email, fullname, password, username);

  if (
    [fullname, email, password, username].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username is already exist");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required!");
  }

  
});

export { registerUser };
