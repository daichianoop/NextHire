import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
    return (
        <section className="backdrop-blur-sm px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 rounded-xl border-2 border-white  shadow-md max-w-5xl mx-auto">

            {/* Page Heading */}
            <div className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    About <span className="text-primary-200">NextHire.ai</span>
                </h1>
                <p className="mt-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    Elevating candidates with smart, AI-powered interview training.
                </p>
            </div>

            {/* Mission */}
            <div className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed space-y-5 max-w-3xl mx-auto mb-12">
                <p>
                    <strong>NextHire.ai</strong> is your personal AI-powered interview coach, designed to help
                    you grow into a confident, well-prepared candidate through realistic practice and smart feedback.
                </p>
                <p>
                    Whether you&#39;re starting your career, switching paths, or aiming higher — our AI-driven platform tailors each session to your role, level, and tech stack.
                </p>
                <p className="text-primary-200 font-semibold italic">
                    Our goal is simple: help people become better communicators, problem solvers, and interview performers.
                </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    🛠 Tech Stack
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 dark:text-gray-200 text-sm sm:text-base max-w-3xl mx-auto list-disc list-inside">
                    <li><strong>Next.js</strong> – Frontend framework for performant SSR apps</li>
                    <li><strong>Tailwind CSS</strong> – Utility-first CSS for responsive UI</li>
                    <li><strong>Firebase</strong> – Scalable backend for auth & database</li>
                    <li><strong>Vapi</strong> – Voice-based interview interaction</li>
                    <li><strong>Google AI Studio</strong> – Dynamic question and feedback generation</li>
                </ul>
            </div>

            {/* Feature Icons */}
            <div className="flex flex-col sm:flex-row sm:justify-center items-start sm:items-center gap-6 mb-12 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3">
                    <Image src="/star.svg" width={22} height={22} alt="star" />
                    <p className="text-sm sm:text-base">Improve real-world performance</p>
                </div>
                <div className="flex items-center gap-3">
                    <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
                    <p className="text-sm sm:text-base">Practice multiple times</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-secondary w-full sm:w-auto">
                    <Link href="/" className="w-full flex justify-center">
                        <p className="text-sm font-semibold text-primary-200">Back to Dashboard</p>
                    </Link>
                </Button>
                <Button className="btn-primary w-full sm:w-auto">
                    <Link href="/interview" className="w-full flex justify-center">
                        <p className="text-sm font-semibold text-black">Start a Mock Interview</p>
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default AboutPage;
