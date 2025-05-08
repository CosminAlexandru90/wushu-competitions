import React, {useRef} from 'react';
import {CoachCard} from "./components/CoachCard.tsx";
import {AddCoach} from "./components/AddCoach.tsx";
import {useQuery} from "@tanstack/react-query";
import {getCoaches} from "./CoachService.ts";

export const CoachList: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { isPending, isError, data: coaches, error } = useQuery({
    queryKey: ['coaches'],
    queryFn: getCoaches,
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
        <h2>Coaches</h2>
        <button className={'px-6 py-3 rounded-xl bg-blue-400/50'} onClick={handleOpenModal} >Add</button>
      </div>
      <ul className={'flex flex-col gap-2'}>
        {coaches?.map((coach) => (<CoachCard coach={coach} key={coach.id} />))}
      </ul>
      <AddCoach dialogRef={dialogRef} />
    </div>
  );
};