import { Button } from 'antd';
import React, { useMemo } from 'react';
import { CustomScroll } from './CustomScroll';
import { ModalListProp } from '../../types';
import useMediaQuery from '../../CustomHooks/useMediaQuery';

const Footer: React.FC<ModalListProp> = ({ modalList }) => {
  const isMobile = useMediaQuery('(max-width: 1130px)');
  const styleClass = useMemo(() => {
    return isMobile ? 'footer-sub footer-col' : 'footer-sub';
  }, [isMobile]);

  return (
    <div className='footer'>
      <div className='footer-marquee scrollable'>
        <CustomScroll data={modalList.map((modal) => modal.name)} />
      </div>
      <div className={styleClass}>
        <div className='footerText'>@ModelSpace Private Limited</div>
        <div className='footerText'>Terms Of Service</div>
        <div className='footerText'>Privacy Policy</div>
        <Button type='primary'>Help</Button>
      </div>
    </div>
  );
};

export default Footer;
