import {getAccessToken} from "../services/AuthService.ts";

export type AthleteInfo = {
  id: number;
  name: string;
  email: string;
  phone: string;
  clubId: string;
  clubName: string;
  duan: string;
  dateOfBirth: string;
}

export async function getAllAthletes(): Promise<AthleteInfo[]> {
  const token = await getAccessToken();

  const response = await fetch("http://localhost:9000/api/competition/athlete", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch athlete list");
  }

  return response.json();
}
