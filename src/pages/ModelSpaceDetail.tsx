import React from 'react';
import useGetModalSpaceDetails from '../CustomHooks/useGetModalSpaceDetails';
import Description from '../components/ModalSpaceDetails/Description';
import usePredictModalSpace from '../CustomHooks/usePredictModalSpace';
import Output from '../components/ModalSpaceDetails/Output';
import useGetModalList from '../CustomHooks/useGetModelList';
import Footer from '../components/ModalSpaceList/Footer';
import CustomForm from '../components/ModalSpaceDetails/CustomForm';

const ModelSpaceDetail: React.FC = () => {
  const { loading, modalSpaceDetails } = useGetModalSpaceDetails();
  const { modalList } = useGetModalList();
  const { outputs, predictLoading, handleSubmit } = usePredictModalSpace();

  return (
    <div className='modal-space-landing'>
      <Description modalSpaceDetails={modalSpaceDetails} loading={loading} />
      <CustomForm
        modalSpaceDetails={modalSpaceDetails}
        handleSubmit={handleSubmit}
        loading={loading}
        predictLoading={predictLoading}
      />
      {Object.entries(outputs)?.length ? <Output outputs={outputs} /> : null}
      <Footer modalList={modalList} />
    </div>
  );
};

export default ModelSpaceDetail;
