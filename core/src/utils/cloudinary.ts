import cloudinary from "cloudinary";
import { env } from "~/env.mjs";

const cloudinaryHandler = cloudinary.v2.config({
  secure: true,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
});

export default cloudinary;
