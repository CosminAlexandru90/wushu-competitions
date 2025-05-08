import {ClubInfo} from "../club/ClubService.ts";

export type CoachInfo = {
  id: number;
  name: string;
  email: string;
  phone: string;
  headClubs: ClubInfo[];
  memberClubs:  ClubInfo[];
  duan: string;
  dateOfBirth: string;
}

export type CreateCoach = {
  name: string;
  email: string;
  phone: string;
  duan: string;
  dateOfBirth: string;
}

export async function getCoaches(): Promise<CoachInfo[]> {

  const response = await fetch('http://localhost:9000/api/competition/coach');

  if (!response.ok) {
    throw new Error('Failed to fetch coach list');
  }

  return response.json(); // Make sure this is an array
}

export async function createCoach(coach: CreateCoach) {
  const response = await fetch('http://localhost:9000/api/competition/coach', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(coach),
  });

  if (!response.ok) {
    throw new Error('Failed to create coach');
  }
}

export async function deleteCoach(coachId: number) {
  const response = await fetch(`http://localhost:9000/api/competition/coach/${coachId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to delete coach');
  }
}

export async function getCoachById(coachId: string): Promise<CoachInfo> {
  const response = await fetch(`http://localhost:9000/api/competition/coach/${coachId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to delete coach');
  }

  return response.json();
}
