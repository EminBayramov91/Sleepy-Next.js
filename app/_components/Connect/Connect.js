"use client";
import styles from "./connect.module.css";
import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import connectedImg from "@/public/SLEEPYSIGN.webp";
import { useEffect, useState } from "react";

export default function Connect() {
  const { authenticated, user, login, logout, ready } = usePrivy();

  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    async function fetchUP() {
      if (user?.wallet?.address) {
        try {
          const res = await fetch(
            `https://api.universalprofile.cloud/v1/profiles/${user.wallet.address}`
          );
          const data = await res.json();
          // Check if the name exists
          setProfileName(data?.name || data?.description || "");
          console.log("UP Data:", data);
        } catch (err) {
          console.error("Error fetching UP:", err);
        }
      }
    }
    fetchUP();
  }, [user]);

  if (!ready) return null;

  if (authenticated) {
    const userName =
      profileName ||
      user?.wallet?.address?.slice(0, 6) ||
      "User";

    console.log(profileName);
    console.log(user?.wallet?.address);

    return (
      <div className={styles.connect}>
        <button onClick={logout}>{userName}</button>
      </div>
    );
  }

  return (
    <div className={styles.connect}>
      <button onClick={login}>Connect</button>
    </div>
  );
}