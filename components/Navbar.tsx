import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav>
                <Link href="/" className={"flex items-center gap-2"}>
                    <Image src={"/logo.svg"} alt={"Logo"} width={38} height={32}/>
                    <h2 className={"text-primary-100"}>PrepWise</h2>
                </Link>
            </nav>
        </>
    )
}
export default Navbar
