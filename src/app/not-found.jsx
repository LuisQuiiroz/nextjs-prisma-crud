import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Not Found</h1>
        <Link className="text-slate-400 hover:underline" href="/">
          Volver al inicio
        </Link>
      </div>
      
    </section>
  )
}
