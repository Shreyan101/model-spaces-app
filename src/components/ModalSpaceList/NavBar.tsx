import React from 'react';
import '../../styles.css';
import { XOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import useMediaQuery from '../../CustomHooks/useMediaQuery';

const logoStye = {
  fontSize: 30,
};

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 1130px)');

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <XOutlined style={logoStye} />
        <h2>Model Space</h2>
      </div>
      {isMobile ? null : (
        <>
          <div className='navbar-items'>
            <div>Products</div>
            <div>Solutions</div>
            <div>Pricing</div>
            <div>Blogs</div>
            <div>Contact Us</div>
          </div>
          <Button type='primary'>Get Started</Button>
        </>
      )}
    </div>
  );
};

export default NavBar;
