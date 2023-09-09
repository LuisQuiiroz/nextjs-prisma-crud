import { prisma } from "@/libs/prisma"

const addTask = async ({title, description}) => {
  const res =  await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({title, description}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
}

const updateTask = async ({id, title, description}) => {
  const res =  await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({title, description}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
}

const getTask = async (id) =>  {
  const res = await fetch(`/api/tasks/${id}`)
  return await res.json()
}

const deleteTask = async (id) => {
  const res = await fetch(`/api/tasks/${id}`, {
    method: 'DELETE',
  })
  return await res.json()
}

const getAllTasks = async () => {
  return await prisma.task.findMany()
}

export {
  addTask,
  updateTask,
  getTask,
  deleteTask,
  getAllTasks
}