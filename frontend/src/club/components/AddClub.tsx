import React, {RefObject, useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ClubInfo, createClub} from "../ClubService.ts";
import {HeadCoachSelect} from "../../components/selects/HeadCoachSelect.tsx";
import {CoachSelect} from "../../components/selects/CoachSelect.tsx";

type Props = {
  dialogRef: RefObject<HTMLDialogElement | null>;
}

export const AddClub: React.FC<Props> = ({dialogRef}) => {
  const queryClient = useQueryClient()

  const [formData, setFormData] = useState<Omit<ClubInfo, 'id'>>({
    name: '',
    address: '',
    headCoachId: 0,
    headCoachName: '',
    dateEstablished: '',
    coachIds:[],
    coachNames: [],
  });



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "headCoachId" ? Number(value) : value,
    }));
  };

  const handleCloseModal = () => {
    dialogRef?.current?.close();
  };

  const mutation = useMutation({
    mutationFn: createClub,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clubs'] });
      handleCloseModal();
    },
    onError: (error) => {
      console.error(error);
      alert('Error submitting form');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <dialog
      ref={dialogRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-4 bg-blue-300 shadow-lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <h3 className="text-lg font-bold">Add Club</h3>
        <div className="flex flex-col">
          <p>Name</p>
          <input
            type="text"
            name="name"
            required
            className="border p-2 rounded"
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          className="border p-2 rounded"
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dateEstablished"
          placeholder="Date established"
          required
          className="border p-2 rounded"
          onChange={handleInputChange}
        />
        <HeadCoachSelect
          headCoachId={formData.headCoachId}
          onChange={handleInputChange}
        />
        <CoachSelect
          coachIds={formData.coachIds}
          onChange={(selectedCoachIds) =>
            setFormData(prev => ({ ...prev, coachIds: selectedCoachIds }))
        } />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
};