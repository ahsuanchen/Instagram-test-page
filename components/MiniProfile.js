import React from 'react'
import { useSession, signOut } from 'next-auth/react'

const MiniProfile = () => {
  const { data: session } = useSession()
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={session?.user?.image}
        alt={session?.user?.username}
      />
      <div className="ml-4 flex-1">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400" onClick={signOut}>
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
