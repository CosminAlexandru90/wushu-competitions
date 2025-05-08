import React, {useEffect, useState} from 'react';
import {LuUndo2} from "react-icons/lu";

export type Competition={
    name: string;
    date: number;
    ongoing: boolean;
}

export const JudgeLanding: React.FC = () => {
    const [currentCompetition, setCurrentCompetition] = useState<Competition>();

    useEffect(() => {
        setCurrentCompetition({
            name:'Campionatul National de Wushu',
            date: Date.now(),
            ongoing: true
        })
    }, []);
    return (
        <div className={'flex flex-col gap-4 h-screen w-screen bg-gradient-to-r from-blue-950 from-10% via-sky-900 via-30% to-teal-900 to-90% p-4'}>
            <a href={'/'} className={'flex flex-row gap-2 text-xl items-center'}><LuUndo2 /> HOME</a>
        {!currentCompetition && <h1 className={'text-center'}>
            There are no current competitions
        </h1>}
            {currentCompetition && <div className={'h-full w-full'}>
                <h1>Current competition: {currentCompetition.name}</h1>
            </div>}
        </div>
    );
};