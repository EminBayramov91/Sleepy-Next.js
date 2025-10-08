"use client";
import styles from "./connect.module.css";
import { usePrivy } from "@privy-io/react-auth";
import connectedImg from "@/public/SLEEPYSIGN.webp";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Connect() {
  const { authenticated, user, login, logout, ready } = usePrivy();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Загружаем профиль при изменении адреса кошелька
  useEffect(() => {
    const fetchUniversalProfile = async () => {
      if (user?.wallet?.address) {
        setLoading(true);
        try {
          console.log("🔄 Fetching UP for address:", user.wallet.address);

          // Используем тот же API endpoint, что и в рабочем примере
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

    fetchUniversalProfile();
  }, [user?.wallet?.address]);

  if (!ready) {
    return (
      <div className={styles.connect}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (authenticated) {
    console.log("🔍 Full user object:", user);
    console.log("💎 Profile data:", profile);

    // Получаем URL аватара из профиля
    let avatarUrl = connectedImg;
    if (profile?.profileImageUrl) {
      avatarUrl = profile.profileImageUrl;
    }

    console.log("🖼️ Final avatar URL:", avatarUrl);

    return (
      <div className={styles.connect}>
        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <Image
            src={avatarUrl}
            alt="Connected user avatar"
            width={81}
            height={72}
            onClick={logout}
            onError={(e) => {
              console.log("🖼️ Image load error, using fallback");
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