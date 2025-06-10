import React from 'react'
import {getTechLogos} from "@/lib/utils";
import Image from "next/image";

const DisplayTechIcons = async ({techStack} : TechIconProps) => {
   const techIcons = await getTechLogos(techStack);
    return (
        <div className={"flex flex-row"}>{techIcons.slice(0,
        3).map(({ tech, url }, index) => (
            <div key={tech} className={"relative group bg-dark-300 rounded-full accent-pink-200 flex-center"}>
                <span className={"tech-tooltip"}>{tech}</span>
                <Image src={url} alt={tech} width={100} height={100} className={"size-5"}/>
            </div>
        ))}</div>
    )
}
export default DisplayTechIcons
