"use client";

import React from 'react';
import Road from '../components/Road';


const Page = () => {
    // Массив путей, которые будут переданы в компонент Road
    const paths = [
        '/triada/path1',
        '/triada/path2',
        '/triada/path3',
        '/triada/path4',
        '/triada/path5'
    ];

    return (
        <div className="min-h-screen flex flex-col justify-start items-center">
            <h1 className="mt-4 text-white text-5xl md:text-7xl font-bold uppercase text-center">
                Планета Триада
            </h1>
            <Road paths={paths} />
        </div>
    );
};

export default Page;
