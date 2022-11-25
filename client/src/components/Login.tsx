import React, {useRef} from 'react'

interface LoginProps {
  onIdSubmit: (id: string) => void
}

export default function Login({ onIdSubmit }: LoginProps) {
  // create a ref to the input element
  const idRef = useRef<HTMLInputElement>(null)

  // prevent default form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!idRef.current) return

    onIdSubmit(idRef.current.value)
    idRef.current.value = ''
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div>
        <form className='flex flex-col gap-4 border-red-300 border-solid border-2 rounded-lg p-10'
              onSubmit={handleSubmit}>
          <input className='border-red-300  border-solid border-2 rounded-lg p-2'
                 type="text" placeholder="Enter your Id"  ref={idRef}/>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                  type="submit">
                    Login
          </button>
          <button className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' 
                  type="submit">
                    Create a new ID
          </button>
        </form>
      </div>
    </div>
  )
}
