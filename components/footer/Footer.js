import styles from "../../styles/Footer.module.css";


const Footer = ({}) => {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.footerContainer}>
       
           
      
        <div className={styles.row}>
            <p className={styles.colSM}>
                &copy;{new Date().getFullYear()}all rights reserved to Aviv Shamir
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
