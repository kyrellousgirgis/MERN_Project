const multer = require("multer");
const path = "./assets/imgs";
const storage = multer.diskStorage({destination:(req,file,cb)=>{
    cb(null, path);
},
filename:(req,file,cb)=>{
    cb(null,Date.now()+"img"+file.originalname);
}
}
)
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb("Type file is not access", false);
    }
};
const upload = multer({storage,fileFilter});
module.exports = upload;