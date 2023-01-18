import Link from "next/link";
import styles from './layout.module.css';
import Date from './date';

const Navbar = () => {
    return (
        <div className={styles.navbartabs}>
          <Link href="/posts/tab1" className={styles.link}>
            Ways to Order
          </Link>
          <Link href="/items" className={styles.link}>
            Food & Beverages
          </Link>
          <Link href={"/posts/tab3"} className={styles.link}>
            Fuel & Credit Cards
          </Link>
          <Link href="/posts/tab4" className={styles.link}>
            Wawa Rewards
          </Link>
          <Link href="/pages/tab2.js" className={styles.link}>
            Gifts & Gear
          </Link>
          <Link href="/pages/tab2.js" className={styles.link}>
            Careers
          </Link>
        </div>
    )
  }

  export default Navbar;