export const fetchEventData = async () => {
  const response = await fetch(
    "https://6466e38cba7110b663aac3c7.mockapi.io/event"
  );
  const data = await response.json();
  return data;
};
export const postEvent = async (data) => {
  try {
    const response = await fetch(
      "https://6466e38cba7110b663aac3c7.mockapi.io/event",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to post data");
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error(error.message);
  }
};
