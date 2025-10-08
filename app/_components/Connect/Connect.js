"use client";
import styles from "./connect.module.css";
import { usePrivy } from "@privy-io/react-auth";
import connectedImg from "@/public/SLEEPYSIGN.webp";
import Image from "next/image";

export default function Connect() {
  const { authenticated, user, login, logout } = usePrivy();

  if (authenticated) {
    const upProfile = user?.linkedAccounts?.find(
      (acc) => acc.type === "wallet" && acc.chain === "lukso"
    );

    let avatarUrl = connectedImg;
    const ipfsUrl =
      upProfile?.profile?.profileImage?.url ||
      upProfile?.profile?.picture ||
      upProfile?.metadata?.profileImage?.url;

    if (ipfsUrl && ipfsUrl.startsWith("ipfs://")) {
      avatarUrl = ipfsUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
    } else if (ipfsUrl) {
      avatarUrl = ipfsUrl;
    }

    console.log("UP Profile:", upProfile);
    console.log("Avatar URL:", avatarUrl);

    return (
      <div className={styles.connect}>
        <Image
          src={avatarUrl}
          alt="Connected user avatar"
          width={81}
          height={72}
          onClick={logout}
        />
      </div>
    );
  }

  return (
    <div className={styles.connect}>
      <button onClick={login}>Connect</button>
    </div>
  );
}
