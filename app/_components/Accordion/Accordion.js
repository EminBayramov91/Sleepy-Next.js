"use client"
import styles from "./accordion.module.css";
import Image from "next/image";
import arrow from "@/public/accordion-arrow.svg";
import {useState} from "react";

const accordion = [
    {
        id: 1,
        "title": "WHAT IS SLEEP?",
        "description": "SLEEP's 1.5-3 money focused on creating unique characters that act as your personal companies to assist with promoting and enabling baseline 80 habits."
    },
    {
        id: 2,
        "title": "WHAT IS THE GOAL OF SLEEP?",
        "description": "SLEEP has many goals, starting with creating IP that can be used to drive story-telling and move jobs. We believe in the ownership of characters and the usage of decentralised techniques that we do in this area throughout the year are all PTA, authentication of luxury fashioners, and ownership of health data is used. Our first demonstration of these are creation of 30 characters, luxury shoppers & foodfits, and a new branding app that supports healthy habits."
    },
    {
        id: 3,
        "title": "WHAT NETWORK IS THIS LAUNCHED ONE",
        "description": "SLEEP's technology can be 11 DNA – LUNGO"
    },
    {
        id: 4,
        "title": "HOW MUCH IS MINT?",
        "description": "Bearing from the phone: Access hint: 4,000 likes 2 million per profile) Publish hint: -0,576 likes 20 million per profile)"
    },
    {
        id: 5,
        "title": "WHAT IS THE SIZE OF THE COLLECTION?",
        "description": "Collection size is 2 total of 10,000 PTA featuring unique SLEEP's characters."
    },
    {
        id: 6,
        "title": "WHAT SHARP CONTRAST STANDARD IS USED",
        "description": "We have created a new custom mint contract on the LUNGO blockchain using the LDR Standard. Our custom mint contract is known as LDR-TIP, which stands for Token Based Practice. This custom mint contract allows each minted character to have their own business Profile attached to them. This client is on the character's base field over greenRAP to utilize on-the-blasting 8-materials, attachable 8-tradicals inventory, and programming usage at LDR-Axy Manager."
    },
    {
        id: 7,
        "title": "DO YOU NEED A UNIVERSAL PROFILE TO MINT?",
        "description": "We, you will need to learn a tailored profile on LUNGO in order to miss a SLEEPY NFT. Since such character has their own Universal Profile tied to them it is a requirement for nothing not really character inventory."
    },
    {
        id: 8,
        "title": "WHAT IS A UNIVERSAL PROFILE?",
        "description": "A Universal Profile is a small architectural account system, which sets as a source of digital identity. This makes any viewers better overalls across platforms & apps, teams & finishes, and programmables. Universal Profiles are compatible on both desktop and mobile. If you do not know one yet, feel free to create one here https://universalmorything.io/"
    }
]

export default function Accordion() {
    const [activeAccId, setActiveAccId] = useState(null);

    const toggleAccordion = (id) => {
        setActiveAccId((prev) => prev === id ? null : id);
    }

    return (
        <div className={styles.accordion}>
            <h3>ABOUT</h3>
            {accordion.map((el, index) => (
                <div
                    key={el.id}
                    className={`${styles.accordionItem} ${activeAccId === el.id ? styles.show : styles.hide}`}

                >
                    <h4 onClick={() => toggleAccordion(el.id)}>
                        <span>{el.title}</span>
                        <Image
                            src={arrow}
                            width="60"
                            height="60"
                            alt="Accordion Arrow"
                        />
                    </h4>
                    <p>{el.description}</p>
                </div>
            ))}
        </div>
    );
}