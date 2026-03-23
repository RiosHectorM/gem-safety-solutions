import styles from './TechStack.module.css';

export const TechStack = () => {
  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Áreas de Especialización
        </h2>

        <div className={styles.stackGrid}>
          {/* Service Block 1 */}
          <div className={`${styles.card} ${styles.preventionCard}`}>
            <h3 className={styles.cardTitle}>Ingeniería en Prevención y Sistemas de Gestion Integral</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.check}>✔</span> Auditorías de Cumplimiento Legal: Relevamiento general de riesgos (R.G.R.L.) y cumplimiento de la Ley 19.587.
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✔</span> Implementación de Normas ISO: Especialistas en la transición y certificación de los sistemas de gestión ISO 9001 (Calidad), 14001 (Ambiente) y 45001 (Seguridad y Salud).
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✔</span> Gestión de Emergencias: Diseño de planes de evacuación, simulación de siniestros y formación de brigadas industriales.
              </li>
            </ul>
            <div className="service-card">
              <div className={styles.imageGallery}>
                <img src="/assets/45001.png" alt="ISO 45001" className={styles.badgeImage} />
                <img src="/assets/14001.png" alt="ISO 14001" className={styles.badgeImage} />
                <img src="/assets/9001.png" alt="ISO 9001" className={styles.badgeImage} />
              </div>
            </div>
          </div>

          {/* Service Block 2 */}
          <div className={`${styles.card} ${styles.cloudCard}`}>
            <h3 className={styles.cardTitle}>Cloud Architecture & Digital Compliance </h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.check}>✔</span> Estrategia de Nube en AWS: Diseño de arquitecturas bajo el marco de "Well-Architected Framework" de Amazon.
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✔</span> Seguridad de la Información (ISO 27001): Implementación de Sistemas de Gestión de Seguridad de la Información (SGSI) para proteger la propiedad intelectual y los datos del cliente.
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✔</span> Continuidad del Negocio (BCP): Estrategias de recuperación ante desastres y alta disponibilidad para sistemas críticos.
              </li>
            </ul>
            <div className="service-card">
              <div className={styles.imageGallery}>
                <img src="/assets/27001.png" alt="ISO 27001" className={styles.badgeImage} />
                <img src="/assets/AWS.png" alt="AWS" className={styles.badgeImage} />
                <img src="/assets/saa.png" alt="AWS Solutions Architect" className={styles.badgeImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

