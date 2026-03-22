// multer is hadle the multiple form/data means file upload 

import multer from "multer";


// multer.memoryStorage() = do not sotre files on disk. keep them in RAM (memory)
const upload = multer({storage : multer.memoryStorage()})

export default upload