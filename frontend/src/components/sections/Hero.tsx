import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.backgroundWrapper}>
          <div className={styles.innerContent}>
            <h1 className={styles.title}>
              GEM Safety Solutions<br />
              <span className={styles.subtitle}>Seguridad Integral para la Industria del Futuro</span>
            </h1>
            
            <div className={styles.descriptionBox + " service-card"}>
              <p className={styles.descriptionText}>
                Consultoría Integral en Higiene y Seguridad <br /> (ISO 45001 - 14001 - 9001)
              </p>
              <p className={styles.descriptionText}>
                Infraestructura Cloud Segura <br /> (ISO 27001 & AWS).
              </p>
            </div>
            
            <button
              className={styles.cta + " service-card"}
              onClick={() => {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicitar Consulta Técnica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

