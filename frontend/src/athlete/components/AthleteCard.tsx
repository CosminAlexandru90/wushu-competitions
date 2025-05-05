import React from 'react';
import {AthleteInfo} from "../AthleteService.ts";
import {LuTrash} from "react-icons/lu";

type Props = {
    athlete: AthleteInfo;
}

export const AthleteCard: React.FC<Props> = (props) => {
  const handleOpenDeleteModal = () => {
    // dialogRef.current?.showModal();
  };

    return (
    <div className={'flex flex-row justify-between p-4 rounded-xl bg-amber-200/10'}>
      <div className={'grid grid-cols-3 gap-4'}>
      <div className={'text-xl'}>Name: {props.athlete.name}</div>
      <div>Club: {props.athlete.clubName}</div>
      <div>Email: {props.athlete.email}</div>
      <div>Phone: {props.athlete.phone}</div>
      <div>Duan: {props.athlete.duan}</div>
      <div>Born: {props.athlete.dateOfBirth}</div>
      </div>
      <button className={'p-2 rounded-xl bg-red-400/50 flex flex-row items-center gap-2'} onClick={handleOpenDeleteModal} ><LuTrash />Delete</button>
    </div>
  );
};