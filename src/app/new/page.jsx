'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


function NewPage({params}) {

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
    }
  }, [params]);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (params.id) {
      const res = await fetch(`/api/task/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
    } else {
      const res = await fetch('/api/task', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await res.json();
    }
    router.refresh();
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
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold mb-2">Contenido:</label>
          <textarea
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-900 focus:outline-none focus:border-blue-500 text-white"
            rows="3"
            id="description"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Crear
        </button>
       {
        params.id && (
          <button
            className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-red ml-2"
            type="button"
            onClick={async()=>{
            const res = await fetch(`/api/task/${params.id}`, {
                method: 'DELETE',
              })
              const data = await res.json();
              router.refresh();
              router.push('/')
            }}
          >
            Eliminar
          </button>
        )
       }
      </form>
    </div>
  );
}

export default NewPage;
