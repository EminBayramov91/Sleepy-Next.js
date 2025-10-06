"use client"
import Container from "@/app/_components/Container/Container";
import CareersIntro from "@/app/_components/CareersIntro/CareersIntro";
import BenefitsSection from "@/app/_components/BenefitsSection/BenefitsSection";
import JobList from "@/app/_components/JobList/JobList";
import styles from "./page.module.css";
import {useRef} from "react";

export default function Page() {
    const jobsRef = useRef(null);

    return (
        <div className={styles.page}>
            <Container>
                <CareersIntro
                    onScrollToJobs={() =>
                        jobsRef.current?.scrollIntoView(
                            { behavior: "smooth" })}
                />
                <BenefitsSection/>
                <div ref={jobsRef}>
                    <JobList/>
                </div>
            </Container>
        </div>
    );
}