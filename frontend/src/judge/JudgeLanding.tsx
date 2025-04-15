import React, {useEffect, useState} from 'react';

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
        <>
        {!currentCompetition && <h1 className={'text-center'}>
            There are no current competitions
        </h1>}
            {currentCompetition && <div className={'h-full w-full bg-green-100'}>
                <h1>Current competition: {currentCompetition.name}</h1>
            </div>}
        </>
    );
};