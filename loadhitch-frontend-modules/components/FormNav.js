import Link from "next/link";
import { useRouter } from "next/router";

const FormNav = () => {
  const router = useRouter();
  return (
    <div>
      <ul>
        <li>
          <Link
            href="/step1"
            passHref
            className={router.pathname == "/step1" ? "active" : ""}
          >
            <p>Company Profile</p>
          </Link>
        </li>
        <li>
          <Link
            href="/step2"
            passHref
            className={router.pathname == "/step2" ? "active" : ""}
          >
            <p>Load Profile</p>
          </Link>
        </li>
        <li>
          <Link
            href="/step3"
            passHref
            className={router.pathname == "/step3" ? "active" : ""}
          >
            <p>Financial Information</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FormNav;
