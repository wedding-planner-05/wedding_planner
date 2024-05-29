
import express from 'express';
import multer from 'multer';
import image from "../model/image.js"; // Ensure your model is imported correctly

const router = express.Router();
const upload = multer({ dest: "public/images/" });

router.post('/images', upload.array('imageArray', 10), async (req, res) => {
  try {
    console.log(req.files);

    // const filePromises = req.files.map(file => {
    //   return image.create({
    //     // Save necessary file information to the database
    //     filename: file.filename,
    //     originalname: file.originalname,
    //     path: file.path,
    //     mimetype: file.mimetype,
    //     size: file.size
    //   });
    // });
    // const savedImages = await Promise.all(filePromises);
  } catch (error) {
    console.error('Error saving images:', error);
    res.status(500).json({ error: 'Error saving images information' });
  }
});

export default router;
