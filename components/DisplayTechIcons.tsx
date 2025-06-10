import {cn, getTechLogos} from "@/lib/utils";
import Image from "next/image";

const DisplayTechIcons = async ({techStack} : TechIconProps) => {
    const techIcons = await getTechLogos(techStack);
    return (
        <div className={"flex flex-row"}>{techIcons.slice(0,
            3).map(({ tech, url }, index) => (
            <div key={tech} className={cn("relative group rounded-full bg-zinc-800 size-8 accent-pink-200 flex-center", index >= 1 && '-ml-2')}>
                <span className={"tech-tooltip"}>{tech}</span>
                <Image src={url} alt={tech} width={100} height={100} className={"size-6"}/>
            </div>
        ))}</div>
    )
}
export default DisplayTechIcons
