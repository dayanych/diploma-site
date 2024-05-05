import Chart from 'react-apexcharts';
import { Radio, Spin, Upload } from 'antd';
import { InboxOutlined, LoadingOutlined } from '@ant-design/icons';
import { ContractNames } from '../../constants/contract-names';
import { Title } from '../../components/title';
import { Steps } from '../../components/steps';
import { useGraphs } from "./hook/use-graphs";
import styles from './graphs.module.css';

const { Dragger } = Upload;

const Graphs = () => {
  const { graphsData, props, fileLoading, contractType, currentStep, handleContractType, nextStep, prevStep } = useGraphs();

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
            value={`${ContractNames.ServiceAvailability}/${ContractNames.Commissions}`}
            rootClassName={styles.radio}
          >
            Доступность услуг &rarr; Коммиссии
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
      title: 'Диаграмма',
      content: graphsData && (
        <Chart
          options={graphsData.options}
          series={graphsData.series}
          type="bar"
          width={1000}
          className={styles.chart}
        />
      ),
    }
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className='container'>
      <Title level={1}>Графики</Title>
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

export default Graphs;
