export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzNWQxN2VmMy1mY2FhLTRlYWItYmRlOS1hM2JkNjEwMDYzYzgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2OTg2Nzc2NywiZXhwIjoxNjcwNDcyNTY3fQ.pJotvCWT-2Pb6GShO_p8cJFc-pbwjIw65LhfcvmZdCo";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};