import React from 'react';
import '../../styles.css';
import { RadarChartOutlined, RiseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const noBorder = {
  border: 'none',
};

const mainHeadingStyle = {
  fontSize: 22,
  color: 'white',
  fontWeight: 700,
  maxWidth: 700,
};

const subHeadingStyle = {
  fontSize: 16,
  color: 'white',
  fontWeight: 600,
  maxWidth: 700,
};

const btnStyles = {
  display: 'flex',
  gap: '10px',
};

const iconStyle = {
  fontSize: 200,
  color: '#21D4FD',
};

const IntroContent: React.FC = () => {
  return (
    <div className='intro-content'>
      <div className='intro-text'>
        <p style={mainHeadingStyle}>
          A model space is a platform that enables users to interact with
          generative AI models. It provides a user-friendly interface to input
          various data types, such as text, numbers, images, and audio. The
          model then processes this input and generates outputs, including text,
          images, numbers, booleans, and audio formats.
        </p>
        <p style={subHeadingStyle}>
          Additionally, the platform displays the time taken by the model to
          process the input and produce the desired output.
        </p>
        <div style={btnStyles}>
          <Button type='primary'>Get Started</Button>
          <Button
            style={noBorder}
            ghost
            icon={<RiseOutlined />}
            iconPosition='end'
          >
            Book a demo
          </Button>
        </div>
      </div>
      <RadarChartOutlined spin style={iconStyle} />
    </div>
  );
};

export default IntroContent;
