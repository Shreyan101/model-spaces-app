import { useEffect, useState } from 'react';
import { getModelSpaces } from '../api/modelSpaces';
import { ModelSpace } from '../types';
import { notification } from 'antd';

const useGetModalList = () => {
  const [modalList, setModalList] = useState<ModelSpace[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchModalSpace = async () => {
    try {
      const response = await getModelSpaces();
      setModalList(response.data.data);
    } catch (error) {
      notification.error({
        message: 'Something went wrong!',
        description: 'Failed to fetch modal space!',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModalSpace();
  }, []);

  return { loading, modalList };
};

export default useGetModalList;
