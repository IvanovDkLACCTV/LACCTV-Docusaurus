import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Системы аналитики',
    Image: require('@site/static/img/docusaurus.png').default,
    description: (
      <>
        DMS (Driver monitoring system – контроль состояния водителя) для выявления опасного поведения водителя при управлении и алгоритмом ADAS для помощи водителю в обеспечении безопасности вождения. При необходимости пакет алгоритмов ADAS (Advanced driver assistance systems – усовершенствованная система помощи водителю) может быть заменен на пакет алгоритмов BSD (Blind spot detection – контроль слепых зон). При регистрации события система подает звуковой и визуальный сигнал через оповещатель R-Watch, чтобы в режиме реального времени предупредить водителя. В то же время записи событий могут быть выгружены на сервер 
      </>
    ),
  },
  {
    title: 'Установка готовых решений под ключ',
    Image: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Техническая по',
    Image: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Image className={styles.featureImage} role="img" />
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
