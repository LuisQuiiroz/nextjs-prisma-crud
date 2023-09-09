import Link from "next/link"
import TaskCard from "./components/TaskCard"
import { getAllTasks } from "./services/tasks"

export const dynamic = 'force-dynamic'

export default async function Home() {
  const tasks = await getAllTasks()
  return (
    <>
    <Link href="/new">
      <div className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full text-2xl">+</div>
    </Link>
    <main className="container mx-auto px-4">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4">
      {
        tasks.map(task => (
          <TaskCard key={task.id} task={task}/>
        ))
      }
      </section>
    </main>
    </>

  )
}
