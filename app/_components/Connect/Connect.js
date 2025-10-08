"use client";
import styles from "./connect.module.css";
import { usePrivy } from "@privy-io/react-auth";
import connectedImg from "@/public/SLEEPYSIGN.webp";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Connect() {
  const { authenticated, user, login, logout, ready } = usePrivy();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUniversalProfile = async () => {
      if (user?.wallet?.address) {
        setLoading(true);
        try {
          console.log("🔄 Fetching UP for address:", user.wallet.address);

          const response = await fetch(
            `https://api.universalprofile.cloud/v1/profile/${user.wallet.address}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log("📦 UP API Response:", data);

          setProfile(data);
        } catch (error) {
          console.error("🚨 Error fetching Universal Profile:", error);
          setProfile(null);
        } finally {
          setLoading(false);
        }
      }
    };

    if (authenticated) {
      fetchUniversalProfile();
    }
  }, [authenticated, user?.wallet?.address]);

  if (!ready) {
    return (
      <div className={styles.connect}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (authenticated) {
    const avatarUrl = profile?.profileImageUrl || connectedImg;

    return (
      <div className={styles.connect}>
        {loading ? (
          <div className={styles.loading}>Loading profile...</div>
        ) : (
          <Image
            src={avatarUrl}
            alt="Connected user avatar"
            width={81}
            height={72}
            onClick={logout}
            onError={(e) => {
              console.log("❌ Image failed to load, using fallback");
              e.target.src = connectedImg.src;
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className={styles.connect}>
      <button onClick={login}>Connect</button>
    </div>
  );
}