import clientPromise from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

const client = await clientPromise;
const db = client.db("feedbackDB");
const feedbackCollection = db.collection("feedbacks");

export async function GET(request) {
  try {
    const result = await feedbackCollection.find().toArray();
    return Response.json(result);
  } catch (error) {
    console.error("error", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
export async function POST(request) {
  const { message } = await request.json();
  if (!message || typeof message !== "string")
    return Response.json({
      status: 400,
      message: "Please Send a message",
    });

  const newFeedback = { message, date: new Date().toISOString() };
  const result = await feedbackCollection.insertOne(newFeedback);
  revalidatePath("/feedbacks");
  return Response.json(result);
}
