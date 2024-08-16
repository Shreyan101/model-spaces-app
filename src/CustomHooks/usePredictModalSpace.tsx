import { useState } from 'react';
import { predictModalSpace } from '../api/modelSpaces';
import { useParams } from 'react-router-dom';
import { notification } from 'antd';

const usePredictModalSpace = () => {
  const [outputs, setOutputs] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState<boolean | null>(null);

  const { id } = useParams<{
    id: string;
  }>();

  const handleSubmit = async (formValues: Record<string, any>) => {
    try {
      setLoading(true);
      const response = await predictModalSpace(id!, formValues);
      setOutputs(response.data.data);
    } catch (err: any) {
      notification.error({
        message: 'Something went wrong!',
        description: err?.response?.data?.detail,
      });
    } finally {
      setLoading(null);
    }
  };

  return {
    outputs,
    predictLoading: loading,
    handleSubmit,
  };
};

export default usePredictModalSpace;
