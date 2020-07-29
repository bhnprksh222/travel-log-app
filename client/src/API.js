const API_URL = 'http://localhost:2000';

async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

export default listLogEntries;