/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import type { UploadFile, UploadProps, RadioChangeEvent } from 'antd';
import { getApiConfig } from '../../../configs/api.config';
import { ParserRepository } from '../../../api/parser/parser.repository';
import { getFileName } from '../../../helpers/get-file-name';
import { ContractNames } from '../../../constants/contract-names';

const parserRepository = new ParserRepository();
const apiConfig = getApiConfig();

export const useParser = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [contractType, setContractType] = useState<string>(`${ContractNames.ServiceAvailability}/${ContractNames.RemunerationNotice}`);
  const [path, setPath] = useState<string | null>(null);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const [fileLoading, setFileLoading] = useState<boolean>(false);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  }; 

  const handleContractType = (e: RadioChangeEvent) => {
    setContractType(e.target.value);
  };


  const handleUpload = async (file: UploadFile) => {
    console.log(contractType);
    
    const path = file.response?.path;
    if (file.status === 'done') {
      const url = await parserRepository.downloadDocument(path);

      setDownloadLink(url);
      setPath(getFileName(path));
      setFileLoading(false);
      nextStep();
    }
  }

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    action: `${apiConfig.apiUrl}/parser/${contractType}`,
    accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet application/vnd.ms-excel',
    maxCount: 1,
    showUploadList: false,
    onChange: async (payload: any) => {
      setFileLoading(true);
      await handleUpload(payload.file);
    },
  };

  return {
    props,
    downloadLink,
    path,
    fileLoading,
    contractType,
    currentStep,
    handleContractType,
    nextStep,
    prevStep,
  }
};
