export interface ModelSpace {
  name: string;
  id: string;
  description: string;
  avatar: string;
}

export interface ModelSpaceDetails extends ModelSpace {
  inputs: ModelInput[];
  outputs: ModelOutput[];
}

export interface ModelInput {
  name: string;
  description: string;
  type: 'text' | 'number' | 'bool' | 'audio' | 'image';
  required: boolean;
  default: any;
}

export interface ModelOutput {
  name: string;
  description: string;
  type: 'text' | 'number' | 'bool' | 'audio' | 'image' | 'images';
}

export interface PredictionResponse {
  data: Record<string, any>;
}

export interface ModalListProp {
  modalList: ModelSpace[];
}
