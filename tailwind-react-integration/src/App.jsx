// src/App.jsx
import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-2">Tailwind + Vite + React</h1>
        <p className="text-gray-600 mb-4">If you see nice spacing and fonts, Tailwind is active.</p>

        <div className="flex gap-3">
          <button className="flex-1 py-2 rounded-md bg-sky-600 text-white font-medium hover:bg-sky-700">
            Primary
          </button>
          <button className="py-2 px-3 rounded-md border border-gray-200 text-gray-700">
            Secondary
          </button>
        </div>
      </div>
    </div>
  )
}
