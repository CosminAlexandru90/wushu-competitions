import React, {RefObject} from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteClub} from "../ClubService.ts";

type Props = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  clubId: number;
}

export const DeleteClub: React.FC<Props> = ({dialogRef, clubId}) => {
  const queryClient = useQueryClient()

  const handleCloseModal = () => {
    dialogRef?.current?.close();
  };

  const mutation = useMutation({
    mutationFn: () => deleteClub(clubId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clubs'] });
      handleCloseModal();
    },
    onError: (err) => {
      console.error(err);
      alert('Error deleting club');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <dialog
      ref={dialogRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-4 bg-blue-300 shadow-lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <h3 className="text-lg font-bold">Delete club</h3>
        <div>Are you sure you want to delete this club?</div>
        <div className="flex justify-end gap-2">
          <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      </form>
    </dialog>
  );
};