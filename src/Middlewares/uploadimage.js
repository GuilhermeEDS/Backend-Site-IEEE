import multer, { diskStorage } from "multer";

export default (multer({
    storage: diskStorage({
        destination: (req, file, cb) => {
            cb(null, './src/public/upload/')
        },
        filename: (req, file, cb) =>{
            cb(null, Date.now().toString() + "_" + file.originalname)
        }
    }),
    fileFilter : (req, file, cb) =>{
        const extensaoImg = ['image/png','image/jpg','image/jpeg'].find
        (formatoAceito => formatoAceito == file.mimetype);
        
        if(extensaoImg){
            return cb(null, true)
        }

        return cb(null, false)
    }
}))