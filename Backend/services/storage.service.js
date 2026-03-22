import ImageKit from "@imagekit/nodejs";
import dotenv from "dotenv";
dotenv.config();

const imageKit = new ImageKit({

  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
  
});

const uploadFile = async (buffer) => {
  const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: Date.now() + ".jpg",
  });
  return result;
};

export default uploadFile;