import React from 'react';
import '../styles.css';
import NavBar from '../components/ModalSpaceList/NavBar';
import IntroContent from '../components/ModalSpaceList/IntroContent';
import LeadingBrand from '../components/ModalSpaceList/LeadingBrands';
import ModalList from '../components/ModalSpaceList/ModalList';
import useGetModalList from '../CustomHooks/useGetModelList';
import ScannerRedirect from '../components/ModalSpaceList/ScannerRedirect';
import Footer from '../components/ModalSpaceList/Footer';
import CustomSkelton from '../components/ModalSpaceList/CustomSkelton';

const ModalSpaceList: React.FC = () => {
  const { loading, modalList } = useGetModalList();

  return (
    <div className='front-landing'>
      <NavBar />
      <IntroContent />
      <LeadingBrand />
      {loading ? (
        <CustomSkelton length={3} />
      ) : (
        <ModalList modalList={modalList} />
      )}
      <ScannerRedirect />
      <Footer modalList={modalList} />
    </div>
  );
};

export default ModalSpaceList;
