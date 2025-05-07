import React, {useRef} from "react";
import {LuTrash} from "react-icons/lu";
import {ClubInfo} from "../ClubService.ts";

type Props = {
  club: ClubInfo;
}

export const ClubCard: React.FC<Props> = ({club}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenDeleteModal = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div className={'flex flex-row justify-between p-4 rounded-xl bg-amber-200/10'}>
      <a href={`/club/${club.id}`} className={'grid grid-cols-3 gap-4'}>
        <div className={'text-xl'}>Name: {club.name}</div>
        <div>Address: {club.address}</div>
        <div>Date established: {club.dateEstablished}</div>
        <div>Coach: {club.headCoachName}</div>
      </a>
      <button className={'p-2 rounded-xl bg-red-400/50 flex flex-row items-center gap-2'} onClick={handleOpenDeleteModal} ><LuTrash />Delete</button>
      {/*<DeleteClub dialogRef={dialogRef} clubId={club.id} />*/}
    </div>
  );
};