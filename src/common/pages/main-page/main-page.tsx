import { Title } from "../../components/title";

const MainPage = () => {
  return (
    <div className="container">
      <Title level={2}>
        Проект разработки внутреннего веб-приложения для ТОО "Wooppay"
      </Title>
      <h2>Цель проекта:</h2>
      <p>Разработка веб-приложения для обработки информации о сервисах и комиссиях, с целью повышения операционной эффективности и конкурентоспособности.</p>

      <h2>Задачи проекта:</h2>
      <ol>
        <li>Анализ требований предметной области и особенностей документации.</li>
        <li>Определение функционала приложения: обработка сервисов, комиссий, генерация аналитики.</li>
        <li>Выбор программных средств, учет внутренних потребностей компании.</li>
        <li>Определение системы управления контентом для удобного доступа к информации.</li>
        <li>Разработка и тестирование веб-приложения для надежности, безопасности и эффективности.</li>
      </ol>

      <h2>Практическая значимость:</h2>
      <p>Оптимизация процессов, улучшение управленческих решений, эффективное использование ресурсов для достижения стратегических целей.</p>
    </div>
  )
}

export default MainPage;