import styles from "./_styles/page.module.css";
import mainPageImg from "@//public/main-page.webp"
import Image from "next/image";
import Container from "@/app/_components/Container/Container";

export default function Page() {
  return (
    <div className={styles.page}>
        <Container>
                <Image
                    src={mainPageImg}
                    width="1400"
                    className={styles.pageImg}
                    alt="Sleepy main page image"
                />
        </Container>
    </div>
  );
}
