import { Link } from 'react-router'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para a{' '}
        <Link className="text-sky-500 underline dark:text-sky-400" to="/">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
