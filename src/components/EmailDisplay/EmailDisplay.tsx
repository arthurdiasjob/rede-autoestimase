
import styles from './styles.module.scss';

const EndDisplay = ({
    label = "E-mail principal",
    email = "cxemp1odpxemp10.com"
}) => {
    if (!email) {
        return null;
    }

    return (
        <div className={styles.emailContainer}>
            <p className={styles.label}>{label}</p>
            <a
                href={`mailto:${email}`}
                className={styles.emailLink}
            >
                {email}
            </a>
        </div>
    );
};

export default EndDisplay;