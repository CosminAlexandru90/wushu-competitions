import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router";
import {getCoachById} from "../CoachService.ts";
import {CoachCard} from "../components/CoachCard.tsx";

export const CoachInfo: React.FC = () => {
  const { id } = useParams();

  const { isPending, isError, data: coach, error } = useQuery({
    queryKey: ['coach', id],
    queryFn: ()=>getCoachById(id as string),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
    return (
      <div className={'flex flex-col p-8 gap-4 h-full w-full bg-amber-900/30 m-2 rounded-xl'}>
        <CoachCard coach={coach} />
      </div>
    );
};