import React, { useCallback, useEffect, useState } from 'react';
import Home from './Home';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { VideoData } from '../../../../video';
import { C } from '../../const';

const HomeContainer = () => {
  const [data, setData] = useState<Array<VideoData[]> | null>(null);
  const [dataCount, setDataCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const sortingArray = useCallback((newData: Array<VideoData>) => {
    const array = [...newData];
    const result = [];
    while (array.length) {
      result.push(array.splice(0, 3));
    }
    return result;
  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get(`${C.API_URL}/video`).then(res => {
      if (res.data.length !== 0) {
        const modifyData = sortingArray(res.data);
        setData([...modifyData]);
        setDataCount(res.data.length);
      }
    });
    setLoading(false);
  }, [sortingArray]);
  return (
    <>
      {loading ? <Spinner /> : <Home videoData={data} dataCount={dataCount} />}
    </>
  );
};

export default HomeContainer;
