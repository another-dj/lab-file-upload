  
const multer = require('multer');
const cloudinary = require('cloudinary');
const storageCloudinary = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.API_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = storageCloudinary({
  cloudinary,
  folder: '174-squeaker',
  allowedFormats: ['jpg', 'png']
});

const uploader = multer({
  storage
});

module.exports = uploader;