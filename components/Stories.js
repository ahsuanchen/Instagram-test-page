import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'
import Story from './Story'
import { useSession } from 'next-auth/react'

const Stories = () => {
  const { data: session } = useSession()
  const [suggestions, setSuggesttions] = useState([])

  useEffect(() => {
    const suggestion = [...Array(20)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }))
    setSuggesttions(suggestion)
  }, [])

  return (
    <div className="overflow-x- scroll mt-8 flex  space-x-2 rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
