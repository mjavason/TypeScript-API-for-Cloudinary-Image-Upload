import { Router, Request, Response } from 'express'
const uploadRouter = Router();
import { upload } from '../../vendors/multer.vendor'
import { handleUpload } from '../../vendors/cloudinary.vendor';

uploadRouter.post("/", upload.single("my_fiile"), async (req: Request, res: Response) => {
    const fileUploadBuffer = req.file?.buffer;
    const fileUploadMimeType = req.file?.mimetype;

    if (!fileUploadBuffer || !fileUploadMimeType) { } else {
        try {
            const b64 = Buffer.from(fileUploadBuffer).toString("base64");
            let dataURI = "data:" + fileUploadMimeType + ";base64," + b64;
            const cldRes = await handleUpload(dataURI);
            res.json(cldRes);
        } catch (error: any) {
            console.log(error);
            res.send({
                message: error.message,
            });
        }
    }
});

export = uploadRouter;