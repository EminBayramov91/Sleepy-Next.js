"use client";
import styles from "./connect.module.css";
import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import connectedImg from "@/public/SLEEPYSIGN.webp";

export default function Connect() {
  const { authenticated, user, login, logout, ready } = usePrivy();

  if (!ready) return null;

  if (authenticated) {
    const userName = user?.name || user?.wallet?.address?.slice(0, 6) || "User";
    console.log(user.name);
    console.log(user.wallet.address);

    return (
      <div className={styles.connect}>
        <button onClick={logout}>
          {userName}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.connect}>
      <button onClick={login}>Connect</button>
    </div>
  );
}