import React, {RefObject, useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createClub} from "../ClubService.ts";

type Props = {
  dialogRef: RefObject<HTMLDialogElement | null>;
}

export const AddClub: React.FC<Props> = ({dialogRef}) => {
  const queryClient = useQueryClient()

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    headCoachId: 1,
    headCoachName: '',
    dateEstablished: '',
  });



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="border p-2 rounded"
          onChange={handleInputChange}
        />
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