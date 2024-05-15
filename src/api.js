const baseUrl = "https://wedev-api.sky.pro/api/v2/leaderboard";

export async function getLeaders() {
  const response = await fetch(baseUrl, {
    method: "GET",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  } else if (response.status === 200) {
    return response.json();
  }
}

export async function addUser({ name, time, achivments }) {
  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
      achivments,
    }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  } else if (response.status === 200) {
    return response.json();
  }
}
