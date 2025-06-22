import Agent from "@/components/Agent";
import {getCurrentUser} from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <div>
              <span
                  className="animate-pulse inline-block bg-primary-100 text-black text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-1">
                Powered by AI
              </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                    Interview Session Builder
                </h2>
            </div>


            <Agent userName={user?.name} userId={user?.id} type="generate"/>
        </>
    )
}
export default Page