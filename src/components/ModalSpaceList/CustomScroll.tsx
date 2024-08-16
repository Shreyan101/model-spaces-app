import React from 'react';
import '../../styles.css';
import { HeatMapOutlined } from '@ant-design/icons';

interface CustomScrollProps {
  data: string[];
}

export const CustomScroll: React.FC<CustomScrollProps> = ({ data }) => {
  return (
    <div className='marquee'>
      {data.map((name) => (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
          key={name}
        >
          <HeatMapOutlined
            style={{
              color: '#C5CBD3',
              fontSize: 50,
            }}
          />
          <div
            style={{
              color: '#C5CBD3',
              fontSize: 50,
            }}
          >
            {name}
          </div>
        </div>
      ))}
    </div>
  );
};
