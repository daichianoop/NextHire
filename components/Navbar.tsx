import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav>
                <Link href="/" className={"flex items-center gap-2"}>
                    <Image src={"/nav.png"} alt={"Logo"} width={350} height={320}/>
                </Link>
            </nav>
        </>
    )
}
export default Navbar
