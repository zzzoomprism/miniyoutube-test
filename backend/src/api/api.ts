import { VideoData } from "../../../video";
import fs from 'fs';

const getVideoData = (): Array<VideoData> => {
    const dataBuffer = fs.readFileSync('data.json');
    return JSON.parse(dataBuffer.toString());
};
  
export { getVideoData };

