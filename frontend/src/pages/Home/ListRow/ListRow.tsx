import React, { CSSProperties } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import block from 'bem-cn-lite';

import { VideoData } from '../../../../../video';
import { C } from '../../../const';
import './ListRow.scss';

const b = block('home-list');

type PropsType = {
  style: CSSProperties | undefined;
  data: VideoData;
};

const ListRow: React.FC<PropsType> = ({ style, data }) => {
  return (
    <div style={style}>
      <div className={b()}>
        <Card className={b('media-card')}>
          <CardMedia
            component="video"
            src={C.PUBLIC_DIR + data.video_url}
            title="Contemplative Reptile"
            height="300"
            controls
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={b('title')}
            >
              {data.video_title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={b('description')}
            >
              {data.video_description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListRow;
