'use client';
import styles from "./connect.module.css"
import {usePrivy} from "@privy-io/react-auth";
export default function Connect () {
    const { login } = usePrivy();
    return (
        <div className={styles.connect}>
            <button onClick={login}>Connect</button>
        </div>
    )
}