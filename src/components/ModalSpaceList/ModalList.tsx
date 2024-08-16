import React from 'react';
import '../../styles.css';
import { Avatar, Card, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ModalListProp } from '../../types';
const { Meta } = Card;

const ModalList: React.FC<ModalListProp> = ({ modalList }) => {
  const navigate = useNavigate();
  const handleRedirect = (id: string) => {
    navigate(`/modal-space/${id}`);
  };

  return (
    <div className='modalList'>
      {(modalList || [])?.map((modal) => (
        <Card
          key={modal?.id}
          style={{
            width: 350,
            height: 500,
            marginBottom: 10,
            cursor: 'pointer',
          }}
          cover={
            <div className='cardImageWrapper'>
              <Image
                alt='example'
                src={modal?.avatar}
                width={350}
                height={220}
              />
            </div>
          }
          onClick={() => {
            handleRedirect(modal?.id);
          }}
        >
          <Meta
            avatar={<Avatar src={modal?.avatar} />}
            title={modal?.name}
            description={modal?.description}
          />
        </Card>
      ))}
    </div>
  );
};

export default ModalList;
