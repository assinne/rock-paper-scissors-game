import { ReactElement } from 'react';
import styles from '../styles/rulesModal.module.css';
import Image from 'next/image';

type ShowRules = {
    show: boolean,
    handleClose: () => void,
}

const RulesModal = ({handleClose, show}:ShowRules): ReactElement => {
    const showHideClassName = show ? 'showRules' : 'hideRules';
    return (
        <div className={styles[showHideClassName]}>
            <section className={styles.modalMain}>
                <Image src='/icon-close.svg' alt='close' onClick={handleClose} width='35' height='35'/>
                <p>RULES</p>
                <Image className={styles.rulesPicture} src='/image-rules.svg' alt='rules' width='375' height='450'/>
            </section>
        </div>
    );
}
export default RulesModal;