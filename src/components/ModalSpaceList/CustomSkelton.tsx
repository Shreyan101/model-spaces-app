import { Skeleton } from 'antd';

interface CustomSkeltonProp {
  length: number;
}

const CustomSkelton: React.FC<CustomSkeltonProp> = ({ length }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
      }}
    >
      {Array.from({ length }).map(() => (
        <Skeleton
          active
          round
          style={{
            height: '200px',
          }}
        />
      ))}
    </div>
  );
};

export default CustomSkelton;
