import React, {useRef} from 'react';
import {useQuery} from "@tanstack/react-query";
import {AddClub} from "./components/AddClub.tsx";
import {ClubCard} from "./components/ClubCard.tsx";
import {getClubs} from "./ClubService.ts";

export const ClubList: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { isPending, isError, data: clubs, error } = useQuery({
    queryKey: ['clubs'],
    queryFn: getClubs,
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
    <div className={'flex flex-col p-8 gap-4 h-full w-full bg-pink-900/30 m-2 rounded-xl'}>
      <div className={'flex flex-row items-center justify-between'}>
        <h2>Clubs</h2>
        <button className={'px-6 py-3 rounded-xl bg-blue-400/50'} onClick={handleOpenModal} >Add</button>
      </div>
      <ul className={'flex flex-col gap-2'}>
        {clubs?.map((club) => (<ClubCard club={club} key={club.id} />))}
      </ul>
      <AddClub dialogRef={dialogRef} />
    </div>
  );
};