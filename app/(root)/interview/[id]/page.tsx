import {getInterviewById} from "@/lib/actions/general.action";
import {redirect} from "next/navigation";
import Image from "next/image";
import {getRandomInterviewCover} from "@/lib/utils";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import Agent from "@/components/Agent";
import {getCurrentUser} from "@/lib/actions/auth.action";

const Page = async ({ params }: RouteParams) => {
    const { id } = await params;
    const user = await getCurrentUser();
    const interview = await getInterviewById(id);

    if(!interview) redirect('/')

    return (
        <>
            <div>
                 <span
                     className="animate-pulse inline-block bg-primary-100 text-black text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Powered by AI
              </span>
                <div className="flex flex-row gap-4 justify-between">
                    <div className="flex flex-row gap-4 items-center max-sm:flex-col">
                        <div className="flex flex-row gap-4 items-center">
                            <Image src={getRandomInterviewCover()} alt="cover-image" width={40} height={40}
                                   className="rounded-full object-cover size-[40px]"/>
                            <h3 className="capitalize text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">{interview.role} Interview</h3>
                        </div>

                        <DisplayTechIcons techStack={interview.techstack}/>
                    </div>

                    <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize">{interview.type}</p>
                </div>
            </div>

            <Agent
                userName={user?.name || ''}
                userId={user?.id}
                interviewId={id}
                type="interview"
                questions={interview.questions}
            />
        </>
    )
}
export default Page