import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import {getCurrentUser, } from "@/lib/actions/auth.action";
import {getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";

const Page = async () => {
    const user = await getCurrentUser();

    const [userInterviews, latestInterviews] = await Promise.all([
        await getInterviewsByUserId(user?.id!),
        await getLatestInterviews({ userId: user?.id! })
    ]);

    const hasPastInterviews = userInterviews?.length > 0;
    const hasUpcomingInterviews = latestInterviews?.length > 0;

    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Prep Like a Pro with nexthire&apos;s AI-Driven Custom Mock Interviews.</h2>
                    <p className="text-lg">
                        Prepare with precision. From role-specific questions to instant AI feedback, NextHire.ai helps
                        you practice effectively and master your interview presence.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3">
                        <Button asChild className="btn-primary w-full sm:w-fit">
                            <Link href="/interview">Generate Mock Interview</Link>
                        </Button>

                        <Button
                            asChild
                            className="w-full sm:w-fit bg-white text-black hover:bg-neutral-200 rounded-full font-bold px-5 py-2 cursor-pointer min-h-10 shadow-md transition-all duration-200"
                        >
                            <Link href="/about">Learn More About Us</Link>
                        </Button>
                    </div>

                </div>

                <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden"/>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>

                <div className="interviews-section">
                    {hasPastInterviews ? (
                        userInterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id}/>
                        ))) : (
                        <p>You haven&apos;t taken any interviews yet</p>
                    )}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>

                <div className="interviews-section">
                    {hasUpcomingInterviews ? (
                        latestInterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id}/>
                        ))) : (
                        <p>There are no new interviews available</p>
                    )}
                </div>
            </section>
        </>
    )
}
export default Page