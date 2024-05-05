/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import type { UploadFile, UploadProps, RadioChangeEvent } from 'antd';
import { ContractNames } from "../../../constants/contract-names";
import { getApiConfig } from "../../../configs/api.config";
import { getCommissionsForGraph } from "../../../helpers/get-commissions-for-graph";
import { useMessage } from "../../../hooks/use-message.hook";

const apiConfig = getApiConfig();

export const useGraphs = () => {
  const messgaing = useMessage();
  const [currentStep, setCurrentStep] = useState(0);
  const [fileLoading, setFileLoading] = useState<boolean>(false);
  const [contractType, setContractType] = useState<string>(`${ContractNames.ServiceAvailability}/${ContractNames.Commissions}`);
  const [graphsData, setGraphsData] = useState<any>(null);

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
    const data = file.response?.data;
    if (file.status === 'done') {
      const {
        ids,
        upperCommissions,
        lowerCommissions,
        accountsPayableSpecialist,
        errorMessgae,
      } = getCommissionsForGraph(data);

      if (errorMessgae) {
        messgaing.error(errorMessgae);
      }

      setGraphsData({
        options: {
          xaxis: {
            categories: ids,
          },
          yaxis: {
            title: {
              text: 'Комиссия (%)',
            },
          },
        },
        series: [
          {
            name: 'Верхняя комиссия',
            data: upperCommissions,
          },
          {
            name: 'Нижняя комиссия',
            data: lowerCommissions,
          },
          {
            name: 'Расчетная нижняя',
            data: accountsPayableSpecialist,
          },
        ],
      })
      setFileLoading(false);
      nextStep();
    }
  }

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    action: `${apiConfig.apiUrl}/graphs/${contractType}`,
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
    fileLoading,
    contractType,
    currentStep,
    graphsData,
    handleContractType,
    nextStep,
    prevStep,
  }
};
