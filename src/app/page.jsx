import { prisma } from "@/libs/prisma";

async function loadTask() {
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTask();
  console.log(tasks);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id} className="bg-gray-800 p-6 mb-4 rounded-md shadow-md text-white hover:bg-gray-700 transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-2">{task.title}</h2>
          <p className="text-gray-300 mb-2">{task.description}</p>
          <p className="text-gray-500 text-sm">Created at: {new Date (task.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
