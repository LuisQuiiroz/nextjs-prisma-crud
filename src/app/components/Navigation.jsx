import Link from "next/link";

export default function Navigation() {
  return (
    <div>
    <nav className="bg-slate-800">
      <div className="container mx-auto flex justify-between, items-center py-3 px-4">
        <Link href="/">
          <h3 className="font-medium text-3xl">Notas</h3>
        </Link>
      </div>
    </nav>      
    </div>
  )
}
