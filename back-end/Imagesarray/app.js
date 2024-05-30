import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import { DataTypes } from 'sequelize';



const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

app.use(express.json());

const AllImages = async (req, res) => {
    try {
        const filePaths = req.files.map(file => file.path);

        const newImage = await Image.create({
            image: filePaths[0], // Assume the first image is the primary image
            imageArray: filePaths
        });

        res.status(201).json({ message: 'Images uploaded successfully', newImage });
    } catch (error) {
        console.error('Error saving images:', error);
        res.status(500).json({ error: 'Error saving images information' });
    }
};

// Define the route for image uploads
router.post('/images', upload.array('imageArray', 10), AllImages);

// Add the router to the app
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
