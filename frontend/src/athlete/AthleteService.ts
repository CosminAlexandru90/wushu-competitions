export type AthleteInfo = {
  id: number;
  name: string;
  email: string;
  phone: string;
  clubId: number;
  clubName: string;
  duan: string;
  dateOfBirth: string;
}

export async function getAthletes(): Promise<AthleteInfo[]> {

  const response = await fetch('http://localhost:9000/api/competition/athlete');

  if (!response.ok) {
    throw new Error('Failed to fetch athlete list');
  }

  return response.json(); // Make sure this is an array
}

export async function createAthlete(athlete: Omit<AthleteInfo, 'id'>) {
  const response = await fetch('http://localhost:9000/api/competition/athlete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(athlete),
  });

  if (!response.ok) {
    throw new Error('Failed to create athlete');
  }
}

export async function deleteAthlete(athleteId: number) {
  const response = await fetch(`http://localhost:9000/api/competition/athlete/${athleteId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to delete athlete');
  }
}

export async function getAthleteById(athleteId: string): Promise<AthleteInfo> {
  const response = await fetch(`http://localhost:9000/api/competition/athlete/${athleteId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to delete athlete');
  }

  return response.json();
}
