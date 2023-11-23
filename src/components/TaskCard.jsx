'use client'
import { useRouter } from "next/navigation";



function TaskCard({ task }) {
    const router = useRouter();

  return (
    <div
      key={task.id}
      className="bg-gray-800 p-6 mb-4 rounded-md shadow-md text-white hover:bg-gray-700 transition duration-300 ease-in-out"
        
    >
      <h2 className="text-xl font-bold mb-2">{task.title}</h2>
      <p className="text-gray-300 mb-2">{task.description}</p>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline-blue"
          onClick={() => router.push(`/tasks/edit/${task.id}`)}
        >
          Editar
        </button>
        
      </div>
    </div>
  );
}

export default TaskCard;
