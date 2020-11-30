import React, { memo } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
  SvgIconProps,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import block from 'bem-cn-lite';
import './Upload.scss';
const b = block('upload-page');
import Icon from '../../components/Icon';

const svgClass: SvgIconProps['classes'] = {
  root: 'svg-icon',
};

type PropsType = {
  fileTitle: string;
  fileDescription: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  handleFileChange?: ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => void;
  handleTitleChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
  localFile: string;
  error: { fileTitle: string; fileDesc: string; file: string };
  uploaded: boolean;
  disabled: boolean;
};

const Upload: React.FC<PropsType> = memo(
  ({
    localFile,
    fileDescription,
    fileTitle,
    onSubmit,
    handleFileChange,
    handleDescChange,
    handleTitleChange,
    error,
    uploaded,
    disabled,
  }) => {
    if (uploaded) {
      return <Redirect to="/" />;
    }

    return (
      <div className={b()}>
        <div className={b('title-box')}>
          <Typography variant="h2">Upload your favorite video!</Typography>
          <Typography variant="h5" className={b('desc')}>
            You can see your video preview here
          </Typography>
          <Icon name="down-arrow" />
        </div>
        <Grid
          container
          spacing={3}
          alignContent="center"
          justify="center"
          className={b('upload-container')}
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <form onSubmit={onSubmit}>
              <Box className={b('form-container')}>
                <TextField
                  error={!!error.fileTitle}
                  name="videoTitle"
                  onChange={handleTitleChange}
                  label="Title of your video"
                  helperText={error.fileTitle}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  error={!!error.fileDesc}
                  name="videoDescription"
                  rows={4}
                  multiline
                  onChange={handleDescChange}
                  label="Description of your video"
                  helperText={error.fileDesc}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <Box mt={3} mb={3}>
                  <Button variant="outlined" component="label" color="primary">
                    Choose your video
                    <input
                      onChange={handleFileChange}
                      type="file"
                      name="file"
                      hidden
                    />
                  </Button>
                  <Typography variant="button">{error.file}</Typography>
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={disabled}
                >
                  {' '}
                  Upload Video{' '}
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card>
              <CardMedia
                component="video"
                src={localFile}
                title="Contemplative Reptile"
                height="300"
                controls
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {fileTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {fileDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  },
);

export default Upload;
