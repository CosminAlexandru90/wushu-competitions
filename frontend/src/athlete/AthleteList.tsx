import React, {useRef} from 'react';
import {AthleteCard} from "./components/AthleteCard.tsx";
import {AddAthlete} from "./components/AddAthlete.tsx";
import {useQuery} from "@tanstack/react-query";
import {getAthletes} from "./AthleteService.ts";

export const AthleteList: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { isPending, isError, data: athletes, error } = useQuery({
    queryKey: ['athletes'],
    queryFn: getAthletes,
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const handleOpenModal = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div className={'flex flex-col p-8 gap-4 h-full w-full bg-amber-900/30 m-2 rounded-xl'}>
      <div className={'flex flex-row items-center justify-between'}>
      <h2>Athletes</h2>
        <button className={'px-6 py-3 rounded-xl bg-blue-400/50'} onClick={handleOpenModal} >Add</button>
      </div>
      <ul className={'flex flex-col gap-2'}>
        {athletes?.map((athlete) => (<AthleteCard athlete={athlete} key={athlete.id} />))}
      </ul>
      <AddAthlete dialogRef={dialogRef} />
    </div>
  );
};