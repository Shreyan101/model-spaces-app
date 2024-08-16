import React, { useMemo } from 'react';
import '../../styles.css';
import { QRCode } from 'antd';
import useMediaQuery from '../../CustomHooks/useMediaQuery';

const ScannerRedirect: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 1130px)');
  const userText = useMemo(() => {
    return isMobile ? "Share to other's" : 'Explore on Your Phone';
  }, [isMobile]);
  return (
    <div className='scanner'>
      <div
        style={{
          fontSize: isMobile ? '20px' : '40px',
          color: 'white',
          fontWeight: 600,
        }}
      >
        {userText}
      </div>
      <QRCode
        value={`https://www.simplismart.ai/`}
        bordered={true}
        bgColor='white'
        size={220}
      />
    </div>
  );
};

export default ScannerRedirect;
