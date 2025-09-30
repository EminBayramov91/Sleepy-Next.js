import styles from "./footer.module.css"
import FooterLogo from "@/app/_components/Footer/FooterLogo";
import FooterAbout from "@/app/_components/Footer/FooterAbout";
import FooterOther from "@/app/_components/Footer/FooterOther";
import FooterSocial from "@/app/_components/Footer/FooterSocial";
export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <FooterLogo />
                <FooterAbout />
                <FooterOther />
                <FooterSocial />
            </div>
        </footer>
    )
}