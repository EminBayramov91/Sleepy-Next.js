"use client";
import styles from "./connect.module.css";
import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import connectedImg from "@/public/SLEEPYSIGN.webp";

export default function Connect() {
  const { authenticated, user, login, logout, ready } = usePrivy();

  if (authenticated) {
    return (
      <div className={styles.connect}>
        <button onClick={logout}>Connected</button>
      </div>
    );
  }

  return (
    <div className={styles.connect}>
      <button onClick={login}>Connect</button>
    </div>
  );
}