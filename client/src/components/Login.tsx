import React, {useRef} from 'react'
import {v4 as uuidV4 } from 'uuid'

interface LoginProps {
  onIdSubmit: React.Dispatch<React.SetStateAction<string>>
}

export default function Login({ onIdSubmit }: LoginProps) {
  const idRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!idRef.current) return
    
    onIdSubmit(idRef.current.value)
    idRef.current.value = ''
  }

  const createNewId = () => {
    onIdSubmit(old => uuidV4().toString())
  }

  return (
    <div className='flex items-center justify-center h-full max-h-fit'>
      <div className='flex flex-col gap-4 border-red-300 border-solid border-2 rounded-lg p-10'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input className='border-red-300  border-solid border-2 rounded-lg p-2'
                 type="text" placeholder="Enter your Id"  ref={idRef}/>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                  type="submit">
                  Login
          </button>
        </form>
          <button className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' 
                  onClick={createNewId}>
                  Create a new ID
          </button>
      </div>
    </div>
  )
}
