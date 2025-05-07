import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getAthleteById} from "../AthleteService.ts";
import {useParams} from "react-router";
import {AthleteCard} from "../components/AthleteCard.tsx";

export const AthleteInfo: React.FC = () => {
  const { id } = useParams();

  const { isPending, isError, data: athlete, error } = useQuery({
    queryKey: ['athlete', id],
    queryFn: ()=>getAthleteById(id as string),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
    return (
      <div className={'flex flex-col p-8 gap-4 h-full w-full bg-amber-900/30 m-2 rounded-xl'}>
        <AthleteCard athlete={athlete} />
      </div>
    );
};