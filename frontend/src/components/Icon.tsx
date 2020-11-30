import React from 'react';
import { SvgIconProps } from "@material-ui/core"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PublishIcon from '@material-ui/icons/Publish';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';


type PropType = {
  name: string;
};

const svgClass: SvgIconProps['classes'] = {
  root: 'svg-icon'
};

const Icon: React.FC<PropType & any> = ({ name, ...rest }) => {
  switch (name) {
    case 'stream':
      return <FiberManualRecordIcon classes={svgClass} {...rest} />;
    case 'video':
      return <LiveTvIcon classes={svgClass} {...rest} />;
    case 'upload':
      return <PublishIcon classes={svgClass} {...rest} />;
    case 'sad':
      return <SentimentDissatisfiedIcon classes={svgClass} {...rest} />;
    case 'down-arrow':
      return <SubdirectoryArrowLeftIcon classes={svgClass} {...rest} />;
    default:
      return null;
  }
};

export default Icon;
