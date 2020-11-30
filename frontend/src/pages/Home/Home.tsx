import React, { memo, useCallback } from 'react';
import { VideoData } from '../../../../video';
import { FixedSizeGrid } from 'react-window';
import { AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListRow from './ListRow/ListRow';
import { Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Icon from '../../components/Icon';
import { C } from '../../const';
import block from 'bem-cn-lite';
const b = block('home-page');

import './Home.scss';

type PropType = {
  videoData: Array<VideoData[]> | null;
  dataCount: number;
};

const Home: React.FC<PropType> = memo(({ videoData, dataCount }) => {
  const matches = useMediaQuery('(min-width:900px)');
  const listRow = useCallback(({ style, columnIndex, rowIndex, data }) => {
    if (!data[rowIndex][columnIndex]) {
      return null;
    } else {
      return <ListRow style={style} data={data[rowIndex][columnIndex]} />;
    }
  }, []);
  return (
    <div className={b()}>
      <div style={{ flex: '1 1 auto' }}>
        {!videoData ? (
          <Box className={b('nodata-box')}>
            <Typography variant="h2">There are no videos yet</Typography>
            <Typography variant="body1">
              You can upload any video that you want by click the button
            </Typography>
            <Box mt={5}>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                component={NavLink}
                to={C.ROUTE.upload.route}
                startIcon={<Icon name={C.ROUTE.upload.icon} />}
              >
                {C.ROUTE.upload.name}
              </Button>
            </Box>
          </Box>
        ) : (
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeGrid
                width={width}
                height={height}
                columnCount={!matches ? 1 : 3}
                columnWidth={!matches ? width : width / 3}
                rowHeight={410}
                rowCount={Math.ceil(dataCount / 3)}
                itemData={videoData.length === 0 ? null : videoData}
              >
                {listRow}
              </FixedSizeGrid>
            )}
          </AutoSizer>
        )}
      </div>
    </div>
  );
});

export default Home;
