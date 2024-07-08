export const fileFilter = (req:Express.Request, file:Express.Multer.File, cb:Function) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('File is not supported'), false);
  }
  cb(null, true);
}