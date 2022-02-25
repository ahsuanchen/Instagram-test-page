import React from 'react'

import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestion from './Suggestion'
import { useSession, signOut } from 'next-auth/react'

const Feed = () => {
  const { data: session } = useSession()
  return (
    <main className={`grid-col-1 mx-auto grid md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3 ${!session && "!grid-cols-1 !max-w-3xl"}`}>
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      {session && (
        <section className="hidden md:col-span-1 xl:inline-grid">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggestion />
          </div>
        </section>
      )}
    </main>
  )
}

export default Feed
