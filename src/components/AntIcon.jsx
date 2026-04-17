import * as Icons from '@ant-design/icons';
import React from 'react';

function AntIcon({ type, ...rest }) {
  const DynamicIcon = Icons[type];
  return DynamicIcon ? <DynamicIcon {...rest} /> : null;
}

export default AntIcon;
