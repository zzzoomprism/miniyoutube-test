import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Upload from './Upload';
import { C } from '../../const';

const UploadContainer = () => {
  const [localFile, setLocalFile] = useState('');
  const [uploaded, setUploaded] = useState(false);
  const [file, setFile] = useState<File>();
  const [error, setError] = useState({
    fileTitle: '',
    fileDesc: '',
    file: 'Choose file',
  });
  const [disabled, setDisabled] = useState(true);
  const [fileTitle, setFileTitle] = useState('');
  const [fileDescription, setFileDescription] = useState('');
  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      if (
        !error.fileTitle &&
        !error.fileDesc &&
        !error.file &&
        file &&
        fileTitle &&
        fileDescription
      ) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('videoTitle', fileTitle);
        formData.append('videoDesc', fileDescription);
        try {
          const res = await axios.post(`${C.API_URL}/upload`, formData);
          if (res.data) {
            setUploaded(res.data);
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        setError(error => ({
          ...error,
          fileTitle: 'Please enter all forms!',
          fileDesc: 'Please enter all forms!',
          file: 'Choose file',
        }));
      }
    },
    [error, file, fileTitle, fileDescription],
  );

  const handleFileChange = useCallback(
    ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
      let file;
      if (files && files[0]) {
        file = files[0];
      }
      if (file && /^video/.test(file.type)) {
        setLocalFile(URL.createObjectURL(file));
        setFile(file);
        setError(error => ({ ...error, file: '' }));
        console.error(file);
      } else {
        setError(error => ({ ...error, file: 'Choose correct video file' }));
      }
    },
    [],
  );

  const handleTitleChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      if (value.length < 8) {
        setError(error => ({ ...error, fileTitle: 'Too small title' }));
      } else {
        setError(error => ({ ...error, fileTitle: '' }));
      }
      setFileTitle(value);
    },
    [],
  );

  const handleDescChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      if (value.length < 8) {
        setError(error => ({ ...error, fileDesc: 'Too small title' }));
      } else {
        setError(error => ({ ...error, fileDesc: '' }));
      }
      setFileDescription(value);
    },
    [],
  );

  useEffect(() => {
    if (
      !error.fileTitle &&
      !error.fileDesc &&
      !error.file &&
      fileTitle &&
      fileDescription
    ) {
      setDisabled(false);
    }
  }, [error, fileDescription, fileTitle]);

  return (
    <Upload
      onSubmit={onSubmit}
      fileTitle={fileTitle}
      fileDescription={fileDescription}
      handleFileChange={handleFileChange}
      handleDescChange={handleDescChange}
      handleTitleChange={handleTitleChange}
      localFile={localFile}
      error={error}
      uploaded={uploaded}
      disabled={disabled}
    />
  );
};

export default UploadContainer;
