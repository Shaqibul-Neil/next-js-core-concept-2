import clientPromise from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const client = await clientPromise;
const db = client.db("feedbackDB");
const feedbackCollection = db.collection("feedbacks");

export async function GET(request, { params }) {
  const { id } = await params;
  if (id.length !== 24)
    return Response.json({ status: 404, message: "Send Valid id" });
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);
  return Response.json(result);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  if (id.length !== 24)
    return Response.json({ status: 404, message: "Send Valid id" });
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.deleteOne(query);
  return Response.json(result);
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const { message } = await request.json();
  if (id.length !== 24)
    return Response.json({ status: 404, message: "Send Valid id" });
  if (!message || typeof message !== "string")
    return Response.json({
      status: 400,
      message: "Please Send a message",
    });
  const query = { _id: new ObjectId(id) };
  const newData = { $set: { message } };
  const result = await feedbackCollection.updateOne(query, newData);
  //console.log(result);
  return Response.json(result);
}
