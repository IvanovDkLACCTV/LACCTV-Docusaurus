import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Системы аналитики',
    Svg: require('@site/static/img/CCTV-Dome.svg').default,
    description: (
      <>
        <b>Камеры для общественного транспорта:</b> <br></br>
        — антивандальные камеры;<br></br>
        — мини камеры.
      </>
    ),
  },
  {
    title: 'Установка готовых решений под ключ',
    Svg: require('@site/static/img/truck_cistern.svg').default,
    description: (
      <>
        Работа с любым видом транспорта
      </>
    ),
  },
  {
    title: 'Установка и поддержка ПО',
    Svg: require('@site/static/img/kingofsnakes_HP_C7000.svg').default,
    description: (
      <>
        Серверные решения и техническая поддержка программной части систем видеоаналитики и наблюдения
      </>
    ),
  },
  {
    title: 'Регистраторы',
    Svg: require('@site/static/img/img20-cutout.svg').default,
    description: (
      <>
        Серверные решения и техническая поддержка программной части систем видеоаналитики и наблюдения
      </>
    ),
  },
  {
    title: 'Регистраторы',
    Svg: require('@site/static/img/4x1-cutout.svg').default,
    description: (
      <>
        Серверные решения и техническая поддержка программной части систем видеоаналитики и наблюдения
      </>
    ),
  },
  {
    title: 'Регистраторы',
    Svg: require('@site/static/img/4x1-cutout.svg').default,
    description: (
      <>
        Серверные решения и техническая поддержка программной части систем видеоаналитики и наблюдения
      </>
    ),
  },
  {
    title: 'Регистраторы',
    Svg: require('@site/static/img/4x1-cutout.svg').default,
    description: (
      <>
        Серверные решения и техническая поддержка программной части систем видеоаналитики и наблюдения
      </>
    ),
  },{
    title: 'Регистраторы',
    Svg: require('@site/static/img/4x1-cutout.svg').default,
    description: (
      <>
        Серверные решения и техническая поддержка программной части систем видеоаналитики и наблюдения
      </>
    ),
  },
  {
    title: 'Регистраторы',
    Svg: require('@site/static/img/4x1-cutout.svg').default,
    description: (
      <>
        Серверные решения и техническая поддержка программной части систем видеоаналитики и наблюдения
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
