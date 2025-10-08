"use client";
import styles from "./connect.module.css";
import { usePrivy } from "@privy-io/react-auth";
import connectedImg from "@/public/SLEEPYSIGN.webp";
import Image from "next/image";

export default function Connect() {
  const { authenticated, user, login, logout } = usePrivy();

  if (authenticated) {
    const upProfile =
      user?.linkedAccounts?.find(acc => acc.type === "wallet" && acc.chain === "lukso");
    const avatarUrl = upProfile?.profile?.picture || connectedImg;

    return (
      <div className={styles.connect}>
        <div className={styles.connect}>
          <Image
            src={avatarUrl}
            alt="Connceted img"
            width="81"
            height="72"
            onClick={logout}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.connect}>
      <button onClick={login}>Connect</button>
    </div>
  );
}

