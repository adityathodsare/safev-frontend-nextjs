export const registerUser = async (userData) => {
  const response = await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return response.json();
};
