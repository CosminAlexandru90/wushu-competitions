import React, {RefObject, useState} from 'react';
import {AthleteInfo, getAllAthletes} from "../AthleteService.ts";

type Props = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  setAthletes: (athletes: AthleteInfo[]) => void;
}

export const AddAthlete: React.FC<Props> = ({dialogRef, setAthletes}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clubId: 1,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target)

    try {
      const response = await fetch('http://localhost:9000/api/competition/athlete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to add athlete');

      // Refresh athlete list
      const updatedAthletes = await getAllAthletes();
      setAthletes(updatedAthletes);
      handleCloseModal();
    } catch (err) {
      console.error(err);
      alert('Error submitting form');
    }

    (e.target as HTMLFormElement).reset();
  };

    return (
      <dialog
        ref={dialogRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-4 bg-blue-300 shadow-lg"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
          <h3 className="text-lg font-bold">Add Athlete</h3>
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
            name="club"
            placeholder="Club"
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