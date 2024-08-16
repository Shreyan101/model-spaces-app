import React from 'react';
import '../../styles.css';
import { CodeOutlined } from '@ant-design/icons';
import { Image } from 'antd';

interface OutputProps {
  outputs: Record<string, string>;
}

const Output: React.FC<OutputProps> = ({ outputs }) => {
  return (
    <div className='output-box'>
      <div className='codeOutlined'>
        <CodeOutlined
          style={{
            fontSize: 30,
            color: 'black',
          }}
        />
        <div className='output-text'>Your Output</div>
      </div>
      {Object.entries(outputs).map(([key, value]) => (
        <div key={key} className='output-content'>
          <strong>
            {key}:{` `}
          </strong>
          {value.endsWith('.png') ? (
            <Image
              src={value}
              alt={key}
              style={{
                height: '300px',
                width: '300px',
              }}
            />
          ) : (
            <span>{value}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Output;
