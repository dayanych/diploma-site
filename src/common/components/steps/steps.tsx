import { Button, Steps as AntdSteps } from 'antd';
import styles from './steps.module.css';

interface StepsProps {
  steps: {
    title: string;
    content: "" | JSX.Element | null;
  }[],
  items: {
    key: string;
    title: string;
  }[],
  currentStep: number,
  nextStep: () => void,
  prevStep: () => void
}

const Steps = ({
  steps,
  items,
  currentStep,
  nextStep,
  prevStep,
}: StepsProps) => {
  return (
    <div className={styles.steps}>
      <AntdSteps current={currentStep} items={items} />
      <div className={currentStep === 1 ? '' : styles.contentStyle}>
        {steps[currentStep].content}
      </div>
      {currentStep === 0 && (
        <Button
          type="primary"
          onClick={nextStep}
          className={styles.button}
        >
          Дальше
        </Button>
      )}
      {currentStep === 1 && (
        <Button
          onClick={prevStep}
          className={styles.button}
        >
          Назад
        </Button>
      )}
      {currentStep === steps.length - 1 && (
        <Button
          type="primary"
          className={styles.button}
        >
          Готово
        </Button>
      )}
    </div>
  )
}

export default Steps;
