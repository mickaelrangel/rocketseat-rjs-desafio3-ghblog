import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { PostDetail } from './pages/PostDetail'
import { Posts } from './pages/Posts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  )
}
