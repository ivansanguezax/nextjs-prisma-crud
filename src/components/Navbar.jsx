import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Next CRUD</h1>
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Inicio
          </Link>
          <Link href="/new" className="text-white hover:text-gray-300">
            Nueva
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
