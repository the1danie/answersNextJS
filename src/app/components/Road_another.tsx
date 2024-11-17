"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link'; // Import Link from next/link
const Road = ({paths}) => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-10 px-4">
            <Link
                href={paths[0]}  // Link will navigate to the path specified in the array
                className="text-white absolute left-[10%] top-[45%] text-xl md:text-3xl lg:text-5xl cursor-pointer hover:underline"
            >
                Путь 1
            </Link>

            <Link
                href={paths[1]}
                className="text-white absolute left-[40%] top-[90%] text-xl md:text-3xl lg:text-5xl cursor-pointer hover:underline"
            >
                Путь 2
            </Link>

            <Link
                href={paths[2]}
                className="text-white absolute left-[65%] top-[25%] text-xl md:text-3xl lg:text-5xl cursor-pointer hover:underline"
            >
                Путь 3
            </Link>

            <Link
                href={paths[3]}
                className="text-white absolute left-[75%] top-[70%] text-xl md:text-3xl lg:text-5xl cursor-pointer hover:underline"
            >
                Путь 4
            </Link>


            <Image
                className="w-[70vw] h-[70vh]"
                src="/images/another_lines.svg"
                alt="Lines"
                width={100}
                height={100}
            />
        </div>
)
    ;
};

export default Road;
