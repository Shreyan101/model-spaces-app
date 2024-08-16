import React from 'react';
import '../../styles.css';
import {
  RocketOutlined,
  StockOutlined,
  RobotOutlined,
} from '@ant-design/icons';
import { BrandNameListData } from '../../helpers/helpersVariable';
import { CustomScroll } from './CustomScroll';
import useMediaQuery from '../../CustomHooks/useMediaQuery';

const LeadingBrand: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 1130px)');

  const ourModelStyle = {
    fontSize: '40px',
    color: 'white',
    fontWeight: 700,
  };

  const leadingBrandTextStyle = {
    fontSize: isMobile ? '20px' : '40px',
    color: 'white',
  };
  return (
    <>
      <div className='our-models'>
        <div className='model-content'>
          <div style={ourModelStyle}>Explore Our Models</div>
          <div className='model-subcontent'>
            <p className='md-sc-data'>
              <RocketOutlined />
              Faster
            </p>
            <p className='md-sc-data'>
              <StockOutlined />
              Cheaper
            </p>
            <p className='md-sc-data'>
              <RobotOutlined />
              Secure
            </p>
          </div>
        </div>
      </div>
      <div className='scrollable'>
        <h2 style={leadingBrandTextStyle}>Trusted by Leading Brands</h2>
        <CustomScroll data={BrandNameListData} />
      </div>
    </>
  );
};

export default LeadingBrand;
