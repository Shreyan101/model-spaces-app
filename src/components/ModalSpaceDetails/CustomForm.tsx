import React from 'react';
import { ModelSpaceDetails } from '../../types';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Checkbox,
  Upload,
  Skeleton,
} from 'antd';
import { DownSquareOutlined, UploadOutlined } from '@ant-design/icons';

interface CustomFormProps {
  modalSpaceDetails: ModelSpaceDetails | null;
  handleSubmit: (values: any) => void;
  loading: boolean;
  predictLoading: boolean | null;
}

const CustomForm: React.FC<CustomFormProps> = ({
  modalSpaceDetails,
  handleSubmit,
  loading,
  predictLoading,
}) => {
  const [form] = Form.useForm();

  const renderFormItem = (input: any) => {
    const { name, type, required, default: defaultValue } = input;

    switch (type) {
      case 'text':
        return (
          <Form.Item
            name={name}
            label={name}
            rules={[{ required, message: `${name} is required` }]}
            initialValue={defaultValue || ''}
            style={{
              width: '300px',
            }}
          >
            <Input />
          </Form.Item>
        );
      case 'number':
        return (
          <Form.Item
            name={name}
            label={name}
            rules={[{ required, message: `${name} is required` }]}
            initialValue={defaultValue || ''}
          >
            <InputNumber />
          </Form.Item>
        );
      case 'bool':
        return (
          <Form.Item
            name={name}
            label={name}
            valuePropName='checked'
            initialValue={defaultValue || false}
          >
            <Checkbox />
          </Form.Item>
        );
      case 'audio':
      case 'image':
        return (
          <Form.Item
            name={name}
            label={name}
            rules={[{ required, message: `${name} is required` }]}
            valuePropName='file'
          >
            <Upload listType='picture' beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Upload {type}</Button>
            </Upload>
          </Form.Item>
        );
      default:
        return null;
    }
  };

  return (
    <div className='custom-form'>
      <DownSquareOutlined style={{ fontSize: 100, color: 'white' }} />
      <div className='explore-text'>
        Start by providing your input, then hit 'Predict.' Analyze the results
        and experiment with different input combinations.
      </div>

      {loading ? (
        <div className='form-skelton-loading'>
          <Skeleton active />
          <Skeleton active />
        </div>
      ) : (
        <div className='custom-form-fields'>
          <Form form={form} onFinish={handleSubmit} layout='vertical'>
            {modalSpaceDetails?.inputs.map((input) => (
              <div className='form-fields' key={input.name}>
                {renderFormItem(input)}
              </div>
            ))}
            <div className='btn-predict'>
              <Button
                type='primary'
                htmlType='submit'
                size='large'
                loading={predictLoading || false}
              >
                Predict
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default CustomForm;
