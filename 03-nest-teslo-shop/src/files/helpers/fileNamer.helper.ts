export const fileNamer = (req:Express.Request, file:Express.Multer.File, cb:Function) => {
  return cb(null, file.fieldname + '-' + Date.now()+ '.' + file.mimetype.split('/')[1]);
}