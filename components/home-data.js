import styles from './layout.module.css';

export default function Homedata (){
    return (
        <div>
            <div className={styles.homedata}>
                <div className={styles.homesections}>
                    <img
                        className={styles.image}
                        src="/images/image_1.png"
                        alt=""
                    />
                <div className={styles.divh1}>
                    <h1 className={styles.h1}>Store Locator</h1>
                    <p className={styles.p1}>Search for a Wawa near you</p> 
                    <p className={styles.p2}>Learn more →</p>
                </div>
                </div>
                <div className={styles.homesections}>
                    <img
                        className={styles.image}
                        src="/images/image_2.png"
                        alt=""
                    />
                <div className={styles.divh1}>
                    <h1 className={styles.h1}>Nutrition</h1>                
                    <p className={styles.p1}>New Dinner sandwiches and salad menu.</p>
                    <p className={styles.p2}>Learn more →</p>
                </div>
                </div>
                <div className={styles.homesections}>
                    <img
                        className={styles.image}
                        src="/images/image_3.png"
                        alt=""
                    />
                <div className={styles.divh1}>
                    <h1 className={styles.h1}>Wawa App</h1>
                    <p className={styles.p1}>Refreshers, Smoothies, Hot & Iced Lattes and much more.</p>
                    <p className={styles.p2}>Learn more →</p>
                </div>
                </div>
            </div>
        </div>
    )       
}
