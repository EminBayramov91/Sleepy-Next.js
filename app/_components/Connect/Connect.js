"use client";
import styles from "./connect.module.css";
import { usePrivy } from "@privy-io/react-auth";

export default function Connect() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (authenticated) {
    const displayName =
      user?.wallet?.address?.slice(0, 6) + "..." + user?.wallet?.address?.slice(-4);

    return (
      <div className={styles.connect}>
        <button onClick={logout}>
          {displayName || "Connected"}
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

