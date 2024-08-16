import { Spin } from 'antd';

const StyledSpin: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin size='large' />
    </div>
  );
};

export default StyledSpin;
