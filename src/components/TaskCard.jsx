'use client'
import { useRouter } from "next/navigation";



function TaskCard({ task }) {
    const router = useRouter();

  return (
    <div
      key={task.id}
      className="bg-gray-800 p-6 mb-4 rounded-md shadow-md text-white hover:bg-gray-700 transition duration-300 ease-in-out"
        onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <h2 className="text-xl font-bold mb-2">{task.title}</h2>
      <p className="text-gray-300 mb-2">{task.description}</p>
      <p className="text-gray-500 text-sm">
        Created at: {new Date(task.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}

export default TaskCard;
