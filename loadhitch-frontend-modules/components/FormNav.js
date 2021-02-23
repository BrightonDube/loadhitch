import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/FormNav.module.css";

const FormNav = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <ul>
        <Link
          href="/carrier_profile_form"
          passHref
          className={
            router.pathname == "/carrier_profile_form" ? `{styles.active}` : ""
          }
        >
          <div className={styles.innerContainer}>
            <div className={styles.box}>1</div>
            <li className={styles.menuList}>Company Profile</li>
          </div>
        </Link>

        <Link
          href="/step2"
          passHref
          className={router.pathname == "/step2" ? "active" : ""}
        >
          <div className={styles.innerContainer}>
            <div className={styles.box}>2</div>
            <li className={styles.menuList}>Load Profile</li>
          </div>
        </Link>

        <Link
          href="/step3"
          passHref
          className={router.pathname == "/step3" ? "active" : ""}
        >
          <div className={styles.innerContainer}>
            <div className={styles.box}>3</div>
            <li className={styles.menuList}>Financial Information</li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default FormNav;
