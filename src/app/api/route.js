export const feedback = [
  {
    id: 1,
    message: "Kahabar valo",
  },
  {
    id: 2,
    message: "Kahabar valo na",
  },
  {
    id: 3,
    message: "Kahabar motamti",
  },
];
export async function GET(request) {
  return Response.json({ status: 200, message: "Yahoo. api created" });
}
