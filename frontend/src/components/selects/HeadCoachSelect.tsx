import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getCoaches} from "../../coach/CoachService.ts";

type HeadCoachSelectProps = {
  headCoachId: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const HeadCoachSelect: React.FC<HeadCoachSelectProps> = ({ headCoachId, onChange }) => {
  const { isPending, isError, data: coaches, error } = useQuery({
    queryKey: ['coaches'],
    queryFn: getCoaches,
  });

  if (isPending) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <select
      name="headCoachId"
      value={headCoachId}
      onChange={onChange}
      required
      className="border p-2 rounded"
    >
      <option value="">Select a head coach</option>
      {coaches?.map((coach) => (
        <option key={coach.id} value={coach.id}>
          {coach.name}
        </option>
      ))}
    </select>
  );
};