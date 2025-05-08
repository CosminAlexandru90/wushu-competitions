import React, {RefObject, useState} from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createCoach} from "../CoachService.ts";

type Props = {
  dialogRef: RefObject<HTMLDialogElement | null>;
}

export const AddCoach: React.FC<Props> = ({dialogRef}) => {
  const queryClient = useQueryClient()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    duan: '',
    dateOfBirth: '',
  });



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseModal = () => {
    dialogRef?.current?.close();
  };

  const mutation = useMutation({
    mutationFn: createCoach,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coaches'] });
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
          <h3 className="text-lg font-bold">Add Coach</h3>
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
            name="email"
            placeholder="Email"
            required
            className="border p-2 rounded"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            className="border p-2 rounded"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="duan"
            placeholder="Duan"
            required
            className="border p-2 rounded"
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of birth"
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