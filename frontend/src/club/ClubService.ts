export type ClubInfo = {
  id: number;
  name: string;
  address: string;
  headCoachId: number;
  headCoachName: string;
  dateEstablished: string;
}

export async function getClubs(): Promise<ClubInfo[]> {

  const response = await fetch('http://localhost:9000/api/competition/club');

  if (!response.ok) {
    throw new Error('Failed to fetch club list');
  }

  return response.json();
}

export async function createClub(club: Omit<ClubInfo, 'id'>) {
  const response = await fetch('http://localhost:9000/api/competition/club', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(club),
  });

  if (!response.ok) {
    throw new Error('Failed to create club');
  }
}

export async function deleteClub(clubId: number) {
  const response = await fetch(`http://localhost:9000/api/competition/club/${clubId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to delete club');
  }
}

export async function getClubById(clubId: string): Promise<ClubInfo> {
  const response = await fetch(`http://localhost:9000/api/competition/club/${clubId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to delete club');
  }

  return response.json();
}
