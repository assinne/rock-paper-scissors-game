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
            <div className={styles.modalMain}>
                <div className={styles.titleContainer}>
                    <p className={styles.titleText}>RULES</p>
                    {/* 
                        Please note below I had to add class to image to style their height and width
                        I do not understand why the css is ignoring the width and height in Next/Image. 
                        It is infact ignoring it completely and adding min/max height/width which
                        is causing the entire style to go strange. I had to add alot of classes and !important
                        override this feature.
                    */}
                    <Image src='/icon-close.svg' alt='close' onClick={handleClose} layout='fixed' width={35} height={35}/>
                </div>
                <Image className={styles.rulesPicture} src='/image-rules.svg' alt='rules' layout='fixed' width={325} height={350}/>
            </div>
        </div>
    );
}
export default RulesModal;