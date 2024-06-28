import { createLazyFileRoute } from '@tanstack/react-router'
import Register from '../pages/register/Index'

export const Route = createLazyFileRoute('/register')({
  component: () => (
    <Register />
  )
})