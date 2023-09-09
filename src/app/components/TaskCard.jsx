'use client'
import { useRouter } from "next/navigation"

export default function TaskCard({task}) {
  const router = useRouter()
  const onClick = () => {
    router.push(`/tasks/edit/${task.id}`)
  }
  return (
    <div className="bg-slate-900 p-5 hover:bg-slate-800 hover:cursor-pointer rounded-2xl" onClick={onClick}>
      <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  )
}
