import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getClubs} from "../../club/ClubService.ts";

type HeadCoachSelectProps = {
  clubId: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const ClubSelect: React.FC<HeadCoachSelectProps> = ({ clubId, onChange }) => {
  const { isPending, isError, data: clubs, error } = useQuery({
    queryKey: ['clubs'],
    queryFn: getClubs,
  });

  if (isPending) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <select
      name="clubId"
      value={clubId}
      onChange={onChange}
      required
      className="border p-2 rounded"
    >
      <option value="">Select a club</option>
      {clubs?.map((club) => (
        <option key={club.id} value={club.id}>
          {club.name}
        </option>
      ))}
    </select>
  );
};