import React, { useMemo } from 'react';
import '../../styles.css';
import { Image, Skeleton } from 'antd';
import { ModelSpaceDetails } from '../../types';
import useMediaQuery from '../../CustomHooks/useMediaQuery';

interface DescriptionProps {
  modalSpaceDetails: ModelSpaceDetails | null;
  loading: boolean;
}

const Description: React.FC<DescriptionProps> = ({
  modalSpaceDetails,
  loading,
}) => {
  const isMobile = useMediaQuery('(max-width: 1130px)');
  const descriptionContentStyle = useMemo(() => {
    return isMobile
      ? 'description-content'
      : 'description-content description-content-max-width';
  }, [isMobile]);
  return (
    <div className='description'>
      <div
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        Ready to explore?
      </div>
      {loading ? (
        <div className='description-skelton-loading'>
          <Skeleton active />
          <Skeleton active />
        </div>
      ) : (
        <div className={descriptionContentStyle}>
          <Image
            alt='example'
            className='description-image'
            src={modalSpaceDetails?.avatar}
            width={200}
            height={200}
          />
          <div className='description-text'>
            Hi I'm {modalSpaceDetails?.name}
          </div>
          <div className='description-text'>
            More About Me :
            <br />
            {modalSpaceDetails?.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
