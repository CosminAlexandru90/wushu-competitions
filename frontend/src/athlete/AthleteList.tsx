import React, {useEffect, useRef, useState} from 'react';
import {AthleteInfo, getAllAthletes} from "./AthleteService.ts";
import {AthleteCard} from "./components/AthleteCard.tsx";
import {AddAthlete} from "./components/AddAthlete.tsx";

export const AthleteList: React.FC = () => {
  const [athletes, setAthletes]=useState<AthleteInfo[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setIsLoading(true);
        const athletes = await getAllAthletes();
        setAthletes(athletes); // Set user info from the API
      } catch (err) {
        setError("Failed to fetch user data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

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
        {isLoading}
        {error}
      </ul>
      <AddAthlete dialogRef={dialogRef} setAthletes={setAthletes} />
    </div>
  );
};