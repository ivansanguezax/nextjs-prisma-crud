'use client'
import { useRouter } from "next/navigation";


function NewPage() {

  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value
    const description = event.target.description.value
    const res = await fetch('/api/task', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json();
    console.log(data);
    router.push('/')
  }

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <form onSubmit={onSubmit} className="bg-gray-800 p-8 rounded-md shadow-md text-white">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold mb-2">Título:</label>
          <input
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-900 focus:outline-none focus:border-blue-500 text-white"
            type="text"
            id="title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold mb-2">Contenido:</label>
          <textarea
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-900 focus:outline-none focus:border-blue-500 text-white"
            rows="3"
            id="description"
          ></textarea>
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
