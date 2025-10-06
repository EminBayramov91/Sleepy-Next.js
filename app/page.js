import styles from "./_styles/page.module.css";

import Container from "@/app/_components/Container/Container";
import MainPageImage from "@/app/_components/MainPageImage/MainPageImage";

export default function Page() {
  return (
    <div className={styles.page}>
        <Container>
          <MainPageImage />
        </Container>
    </div>
  );
}
