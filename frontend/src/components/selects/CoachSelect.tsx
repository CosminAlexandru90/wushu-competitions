import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getCoaches} from "../../coach/CoachService.ts";

type CoachSelectProps = {
  coachIds: number[];
  onChange: (selected: number[]) => void;
};

export const CoachSelect: React.FC<CoachSelectProps> = ({ coachIds, onChange }) => {
  const { isPending, isError, data: coaches, error } = useQuery({
    queryKey: ['coaches'],
    queryFn: getCoaches,
  });

  if (isPending) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(e.target.selectedOptions, option => Number(option.value));
    onChange(selectedIds);
  };

  return (
    <select
      name="coachIds"
      value={coachIds.map(String)}
      onChange={handleSelectChange}
      multiple={true}
      className="border p-2 rounded h-40"
    >
      {coaches?.map((coach) => (
        <option key={coach.id} value={coach.id}>
          {coach.name}
        </option>
      ))}
    </select>
  );
};