require("dotenv").config();
import cloudinaryv2 from "cloudinary";
const cloudinary = cloudinaryv2.v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

export async function handleUpload(file: string) {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return res;
}