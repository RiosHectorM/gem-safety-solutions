import { ShieldCheck, CloudLightning, FileCode } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";
import styles from './Services.module.css';

export const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Nuestros Servicios de Vanguardia
        </h2>

        <div className={styles.servicesGrid}>
          {/* Service Block 1 */}
          <div className={`${styles.serviceCard} ${styles.riskManagement}`}>
            <div className={styles.iconWrapper}>
              <ShieldCheck size={56} color="#F97316" />
            </div>
            <h3 className={styles.serviceTitle}>Gestión de Riesgos e Higiene Industrial</h3>
            <div className={styles.revealWrapper}>
              <TextReveal 
                text="Cumplimiento Normativo y Sistemas de Gestión (ISO)." 
                highlightWords={["Cumplimiento Normativo y Sistemas de Gestión (ISO)."]} 
                highlightColor="#F97316" 
              />
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Desarrollamos e implementamos Sistemas de Gestión Integrados (SGI) bajo estándares ISO 9001, 14001 y 45001. Realizamos auditorías de cumplimiento legal (Ley 19.587), relevamientos de riesgos (SRT), planes de contingencia y capacitación técnica para garantizar entornos de trabajo seguros y eficientes.
              </li>
            </ul>
          </div>

          {/* Service Block 2 */}
          <div className={`${styles.serviceCard} ${styles.cloudInfra}`}>
            <div className={styles.iconWrapper}>
              <CloudLightning size={56} color="var(--accent-color)" />
            </div>
            <h3 className={styles.serviceTitle}>Infraestructura Cloud & ISO 27001</h3>
            <div className={styles.revealWrapper}>
              <TextReveal 
                text="Blindaje de activos de información en la nube." 
                highlightWords={["Blindaje de activos de información en la nube."]} 
                highlightColor="var(--accent-color)" 
              />
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Diseñamos arquitecturas resilientes y escalables en Amazon Web Services (AWS) bajo el marco de la norma ISO 27001. Implementamos estrategias de ciberseguridad defensiva, gestión de identidades (IAM) y continuidad de negocio para proteger el activo más valioso de tu empresa: la información.
              </li>
            </ul>
          </div>

          {/* Service Block 3 */}
          <div className={`${styles.serviceCard} ${styles.dataIntel}`}>
            <div className={styles.iconWrapper}>
              <FileCode  size={56} color="#23f806ff" />
            </div>
            <h3 className={styles.serviceTitle}>Inteligencia de Datos para Auditorías</h3>
            <div className={styles.revealWrapper}>
              <TextReveal 
                text="Software a medida para la gestión de cumplimiento." 
                highlightWords={["Software a medida para la gestión de cumplimiento."]} 
                highlightColor="#3cf916ff" 
              />
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                 Fusionamos la ingeniería de software con la normativa legal para crear herramientas de Automatización de Auditorías. Mediante algoritmos de IA, agilizamos la generación de informes técnicos, seguimiento de hallazgos y control de activos, permitiendo una toma de decisiones basada en datos reales y en tiempo real.
              </li>
            </ul>
          </div>
        </div>

        <h3 className={styles.footerTitle}>
          <TextReveal 
            text="Unificamos el cumplimiento con la resiliencia de tus datos en la nube." 
            highlightWords={["Unificamos el cumplimiento", "resiliencia de tus datos en la nube."]} 
            highlightColor="var(--accent-color)" 
          />
        </h3>
      </div>
    </section>
  );
};
