import { feedback } from "../../route";

export async function GET(request, { params }) {
  const { id } = await params;
  const singleFeedback = feedback.find((fd) => fd.id === Number(id)) || {};
  return Response.json(singleFeedback);
}
