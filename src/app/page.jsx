import TaskCard from "@/components/TaskCard";
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
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default HomePage;
