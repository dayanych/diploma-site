import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <Result
        status="404"
        title="404"
        subTitle="Страница не найдена."
        extra={
          <Link to={'/'}>
            <Button type="primary">
              Вернуться домой
            </Button>
          </Link>
        }
      />
    </div>
  )
}

export default NotFoundPage;
