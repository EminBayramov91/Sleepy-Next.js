import styles from "./footer.module.css";
import footerLogo from "@/public/footer-logo.webp";
import footerImg from "@/public/footer-img.webp";
import footerArrow from "@/public/footer-arrow.svg";
import Image from "next/image";
import Link from "next/link";

export default function FooterLogo() {
    return (
        <div className={styles.footerLogo}>
            <div className={styles.footerTop}>
                <Link href="/">
                    <Image
                        src={footerLogo}
                        width="272"
                        alt="Sleepy footer logo"
                    />
                </Link>
                <p>SIGN UP FOR MAILING LIST</p>
                <div className={styles.footerInput}>
                    <input id="footerInput" type="email" placeholder="example@example.com"/>
                    <button>
                        <Image
                            src={footerArrow}
                            width="55"
                            alt="Arrow for the mail butttonn"
                        />
                    </button>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomMail}>
                    <span>SLEEPY INC, © 2025</span>
                    <Link href="mailto:example@example.com" target="_blank">hello@sleepynft.com</Link>
                </div>
                <div className={styles.footerBottomImg}>
                    <Image
                        src={footerImg}
                        width="227"
                        alt="Footer image"
                    />
                </div>
            </div>
        </div>
    );
}