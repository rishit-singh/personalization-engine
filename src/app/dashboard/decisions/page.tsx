export default function DecisionsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Decisions</h1>
      <p className="text-gray-500 mb-8">
        Every personalization decision with its explanation and confidence score.
      </p>
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-center justify-center h-72 text-gray-300">
        Decision log — explainable AI output per session
      </div>
    </div>
  )
}
