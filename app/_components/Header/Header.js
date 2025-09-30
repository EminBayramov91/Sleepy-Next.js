import Container from "@/app/_components/Container/Container";
import Image from "next/image";
import logo from "@/public/logo.webp"
import styles from "./header.module.css";
import Navigation from "@/app/_components/Navigation/Navigation";
import Connect from "@/app/_components/Connect/Connect";
import Logo from "@/app/_components/Logo/Logo";

export default function Header () {
    return (
        <header className={styles.header}>
                <div className={styles.headerInner}>
                    <Logo />
                    <Navigation />
                    <Connect />
                </div>
        </header>
    )
}