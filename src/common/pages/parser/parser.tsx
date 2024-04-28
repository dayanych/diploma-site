import { Button, Spin, Upload, Radio } from 'antd';
import { DownloadOutlined, InboxOutlined, LoadingOutlined } from '@ant-design/icons';
import { ContractNames } from '../../constants/contract-names';
import { Title } from '../../components/title';
import { Steps } from '../../components/steps';
import { useParser } from './hook/use-parser';
import styles from './parser.module.css';

const { Dragger } = Upload;

const Parser = () => {
  const { props, downloadLink, path, fileLoading, contractType, currentStep, handleContractType, nextStep, prevStep } = useParser();

  const steps = [
    {
      title: 'Выберите документ',
      content: (
        <Radio.Group
          onChange={handleContractType}
          value={contractType}
          defaultValue={contractType}
          size='large'
        >
          <Radio
            value={ContractNames.ServiceAvailability}
            className={styles.radio}
          >
            Доступность услуг &rarr; Уведомление о размере вознаграждений Агента
          </Radio>
        </Radio.Group>
      )
    },
    {
      title: 'Загрузите файл',
      content: (
        <Dragger {...props} className={styles.dragger}>
          {fileLoading ? (
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          ) : (
            <>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Нажмите или перетащите файл в эту область для загрузки
              </p>
              <p className="ant-upload-hint">
                Поддерживаемые форматы: xls, xlsx
              </p>
            </>
          )}
        </Dragger>
      ),
    },
    {
      title: 'Скачайте файл',
      content: downloadLink && (
        <div className={styles.downloadButton}>
          <a download={path} href={downloadLink}>
            <Button type="primary" icon={<DownloadOutlined />} size='large'>
              Скачать
            </Button>
          </a>    
        </div>
      ),
    }
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className='container'>
      <Title level={1}>
        Парсер документов
      </Title>
      <Steps
        steps={steps}
        currentStep={currentStep}
        items={items}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </div>
  ) 
}

export default Parser;
