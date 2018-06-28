import React from 'react';
import Link from 'gatsby-link'
import styles from './index.module.css';
import SVLogo from '../images/SVLogo.jpeg';
import EnglishFlag from '../images/flags/united-kingdom.png';
import ThaiFlag from '../images/flags/thailand.png';
import SpanishFlag from '../images/flags/spain.png';
import GreekFlag from '../images/flags/greece.png';

const Index = () => (
<div>
    <img src={SVLogo} className={styles.SVLogo} />
        {/* <hr className={styles.logodivide} /> */}
        <div className={styles.select}>
            <div className={styles.languagediv}>
                <Link to="/EnglishWEB" className={styles.link}>
                    <p className={styles.languageOriginal}>English</p>
                    <img className={styles.flag} src={EnglishFlag} />
                    <p className={styles.languageEnglish}>English</p>
                </Link>
            </div>
            <div className={styles.languagediv}>
                <Link to="/Thai" className={styles.link}>
                    <p className={styles.languageOriginal}>ภาษาไทย</p>
                    <img className={styles.flag} src={ThaiFlag} />
                    <p className={styles.languageName}>Thai</p>
                </Link>
            </div>
            <div className={styles.languagediv}>
                <Link to="/Greek" className={styles.link}>
                    <p className={styles.languageOriginal}>Κοινή</p>
                    <img className={styles.flag} src={GreekFlag} />
                    <p className={styles.languageName}>NT Greek</p>
                </Link>
            </div>
            <div className={styles.languagediv}>
                <Link to="/Spanish" className={styles.link}>
                    <p className={styles.languageOriginal}>Español</p>
                    <img className={styles.flag} src={SpanishFlag} />
                    <p className={styles.languageName}>Spanish</p>
                </Link>
            </div>
        </div>
        <div>
            <p className={styles.copyright}>© 2018 SourceView LLC.<br /><br />flag icons credit: freepik</p>
        </div>
</div>
)

export default Index;