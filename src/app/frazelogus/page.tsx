"use client";

import React from 'react';
import Road from '../components/Road_another';


const Page = () => {
    // Массив путей, которые будут переданы в компонент Road
    const paths = [
        '/frazelogus/path1',
        '/frazelogus/path2',
        '/frazelogus/path3',
        '/frazelogus/path4',
    ];

    return (
        <div className="min-h-screen flex flex-col justify-start items-center">
            <h1 className="mt-4 text-white text-5xl md:text-7xl font-bold uppercase text-center">
                Планета Фразелогус
            </h1>
            <Road paths={paths} />
        </div>
    );
};

export default Page;
