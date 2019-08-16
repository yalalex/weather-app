import React, { Fragment } from 'react';

const About = ({ lang }) => {
  return lang === 'en' ? (
    <Fragment>
      <h2>About this app</h2>
      <p>
        An application for finding weather in more than 134,000 cities in the
        world.
        <p>
          Provides information on current weather, as well as a detailed
          forecast for the next 24 hours and a forecast for 16 days.
        </p>
      </p>
      <p>
        Made by <a href='https://github.com/yalalex/'>Alex Y</a>.
      </p>
    </Fragment>
  ) : (
    <Fragment>
      <h2>О приложении</h2>
      <p>Приложение для поиска погоды в более чем 134 000 городах мира.</p>
      <p>
        Предоставляет информацию по текущей погоде, а так же подробный прогноз
        на ближайшие 24 часа и прогноз на 16 дней.
      </p>
      <p>
        Сделал <a href='https://github.com/yalalex/'>Alex Y</a>.
      </p>
    </Fragment>
  );
};

export default About;