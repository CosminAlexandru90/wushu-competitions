import React, {useRef} from 'react';
import {AthleteInfo} from "../AthleteService.ts";
import {LuTrash} from "react-icons/lu";
import {DeleteAthlete} from "./DeleteAthlete.tsx";

type Props = {
    athlete: AthleteInfo;
}

export const AthleteCard: React.FC<Props> = ({athlete}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenDeleteModal = () => {
    dialogRef.current?.showModal();
  };

    return (
    <div className={'flex flex-row justify-between p-4 rounded-xl bg-amber-200/10'}>
      <a href={`/athlete/${athlete.id}`} className={'grid grid-cols-3 gap-4'}>
        <div className={'text-xl'}>Name: {athlete.name}</div>
        <div>Club: {athlete.clubName}</div>
        <div>Email: {athlete.email}</div>
        <div>Phone: {athlete.phone}</div>
        <div>Duan: {athlete.duan}</div>
        <div>Born: {athlete.dateOfBirth}</div>
      </a>
      <button className={'p-2 rounded-xl bg-red-400/50 flex flex-row items-center gap-2'} onClick={handleOpenDeleteModal} ><LuTrash />Delete</button>
      <DeleteAthlete dialogRef={dialogRef} athleteId={athlete.id} />
    </div>
  );
};