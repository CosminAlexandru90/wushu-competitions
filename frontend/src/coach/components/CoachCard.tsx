import React, {useRef} from 'react';
import {LuTrash} from "react-icons/lu";
import {DeleteCoach} from "./DeleteCoach.tsx";
import {CoachInfo} from "../CoachService.ts";

type Props = {
    coach: CoachInfo;
}

export const CoachCard: React.FC<Props> = ({coach}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenDeleteModal = () => {
    dialogRef.current?.showModal();
  };

    return (
    <div className={'flex flex-row justify-between p-4 rounded-xl bg-amber-200/10'}>
      <a href={`/coach/${coach.id}`} className={'grid grid-cols-3 gap-4'}>
        <div className={'text-xl'}>Name: {coach.name}</div>
        <div>Clubs: {coach.headClubs.map(club=>`${club.name} - head coach `)}{coach.memberClubs.map(club=>`${club.name} - coach `)}</div>
        <div>Email: {coach.email}</div>
        <div>Phone: {coach.phone}</div>
        <div>Duan: {coach.duan}</div>
        <div>Born: {coach.dateOfBirth}</div>
      </a>
      <button className={'p-2 rounded-xl bg-red-400/50 flex flex-row items-center gap-2'} onClick={handleOpenDeleteModal} ><LuTrash />Delete</button>
      <DeleteCoach dialogRef={dialogRef} coachId={coach.id} />
    </div>
  );
};