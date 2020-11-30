import express, { Request } from 'express';
import { Response } from 'express-serve-static-core';
import { v4 as uuid } from 'uuid';
import path from 'path';
import { getVideoData } from "./api";
import fs from "fs";

const router = express.Router();

router.get('/video', async (req: Request, res: Response) => {
  const dataJSON = await getVideoData();
  res.send(dataJSON);
});

router.post('/upload', async (req: any, res: Response) => {
  const file = req.files.file;
  const videoTitle = req.body.videoTitle;
  const videoDesc = req.body.videoDesc;
  const id = uuid();
  const fileName = `${ id }${ path.extname( file.name ) }`;
  try
  {
    await file.mv(
      `${__dirname}/../public/video/${fileName}`,
      (err: any) => {
        if (err) {
          return res.status(500).send(err);
        }
        const dataJSON = getVideoData();
        dataJSON.push({
          video_id: uuid(),
          video_title: videoTitle,
          video_description: videoDesc,
          video_url: `/video/${fileName}`,
        });
        const jsonData = JSON.stringify(dataJSON);
        fs.writeFileSync('data.json', jsonData);
        res.send('Your video uploaded successfully');
      },
    );
  }
  catch ( e )
  {
    throw new Error(e);
  }
});

export { router };
