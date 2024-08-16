import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ModelSpaceDetails } from '../types';
import { getModelSpacesDetails } from '../api/modelSpaces';
import { notification } from 'antd';

const useGetModalSpaceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [modalSpaceDetails, setModalSpaceDetails] =
    useState<ModelSpaceDetails | null>(null);

  const fetchModalSpaceDetails = async (id: string) => {
    try {
      const response = await getModelSpacesDetails(id);
      setModalSpaceDetails(response.data.data);
    } catch {
      notification.error({
        message: 'Something went wrong!',
        description: 'Failed to fetch model space details',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchModalSpaceDetails(id);
  }, [id]);

  return { loading, modalSpaceDetails };
};

export default useGetModalSpaceDetails;
