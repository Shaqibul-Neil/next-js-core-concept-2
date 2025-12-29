"use client";
const FeedbackForm = () => {
  const handleAddFeedback = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const res = await fetch("http://localhost:3000/api/feedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    if (data.insertedId) {
      alert("success");
    }
  };
  return (
    <div>
      <h3 className="text-center text-lg">Add Feedback</h3>
      <form
        onSubmit={handleAddFeedback}
        action=""
        className="flex flex-col space-y-4"
      >
        <textarea
          name="message"
          id=""
          cols="60"
          rows="5"
          className="border-2 border-dashed"
        ></textarea>
        <button className="bg-red-400 p-4 rounded-xl w-48 ms-auto" type="btn">
          Add Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
