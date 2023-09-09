'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { addTask, deleteTask, getTask, updateTask } from "../services/tasks";


function NewPage({params}) {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  
  const buttonText = params.id ? 'Actualizar' : 'Crear' 

  useEffect(() => {
    if(params.id) {
      getTask(params.id).then(
        (data) => {
          if(data === null) {
            router.push('/')
          } else {
            const {title, description} = data
            setTitle(title)
            setDescription(description)
          }
        }
      )
    }
  }, []);

  const onSubmit =  async (e) => {
    e.preventDefault()
    if(title.trim() === '' || description.trim() === ''){
      setError('No puede haber campos vacíos')
      return
    }
    
    if(params.id) {
      await updateTask({id: params.id, title, description })
    } else {
      await addTask({title, description})
    }

    router.refresh()
    router.push('/')
    setError('')
  }

  const taskToDelete = async (id) => {
    await deleteTask(id)
    router.refresh()
    router.push('/')
  }
  
  return (
    <div className="min-h-[calc(100vh-7rem)] flex justify-center items-center py-10">
      <form className="bg-slate-800 p-10 w-3/4 md:w-1/2 rounded-xl" onSubmit={onSubmit}>
        <input 
          className="border border-gray-400 rounded-xl p-2 mb-4 w-full text-black"
          id="title"
          type="text"
          placeholder="Título" 
          value={title}
          onChange={ (e) => setTitle(e.target.value) }
          />
        <textarea 
        className="border border-gray-400 rounded-xl p-2 mb-4 w-full text-black"
        placeholder="Empiece a escribir" 
        name="description" 
        id="description" 
        cols="30" 
        rows="10"
        value={description}
        onChange={ (e) => setDescription(e.target.value) }
        ></textarea>
        {
          error !== '' && (
            <p className="mb-4 text-red-500">*{error}</p>
          )
        }
        <div className="md:flex gap-4 justify-between">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl w-full md:w-auto mb-4 md:mb-0">Cancelar</button>
          </Link>        
          <button 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-xl w-full md:w-auto"
            type="submit"
            >
              {buttonText}
            </button>
        </div>
        {params.id && (

          <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-xl w-full mt-4"
          type="button"
          onClick={() => taskToDelete(params.id)}
          >
            ELIMINAR
          </button>
        )}
      </form>
    </div>
  )
}

export default NewPage
