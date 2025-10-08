"use client";
import styles from "./connect.module.css";
import { usePrivy } from "@privy-io/react-auth";
import connectedImg from "@/public/SLEEPYSIGN.webp";
import Image from "next/image";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client/react";

const GET_UNIVERSAL_PROFILE = gql`
  query GetUniversalProfile($profileAddress: String!) {
    Profile(where: { id: { _ilike: $profileAddress } }) {
      id
      name
      profileImages {
        url
      }
    }
  }
`;

export default function Connect() {
  const { authenticated, user, login, logout } = usePrivy();
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (authenticated && user) {
      const wallet = user.linkedAccounts?.find(
        (acc) => acc.type === "wallet" && acc.chain === "lukso"
      );
      if (wallet?.address) {
        setAddress(wallet.address.toLowerCase());
      }
    }
  }, [authenticated, user]);

  const { data, loading, error } = useQuery(GET_UNIVERSAL_PROFILE, {
    variables: { profileAddress: address || "" },
    skip: !address,
  });

  const profileImage =
    data?.Profile?.[0]?.profileImages?.[0]?.url?.replace(
      "ipfs://",
      "https://ipfs.io/ipfs/"
    ) || connectedImg;

  if (error) console.error("GraphQL Error:", error);

  if (authenticated) {
    return (
      <div className={styles.connect}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Image
            src={profileImage}
            alt="Connected user avatar"
            width="81"
            height="72"
            onClick={logout}
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

