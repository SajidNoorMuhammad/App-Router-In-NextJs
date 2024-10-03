import Link from "next/link";

export default function Home() {
  return (
    <>


      <header className="bg-gray-800 p-4">
        <nav>
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#home" className="text-white hover:bg-gray-600 px-3 py-2 rounded">
                Home
              </a>
            </li>
            <li>
              <Link href="/about" className="text-white hover:bg-gray-600 px-3 py-2 rounded">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:bg-gray-600 px-3 py-2 rounded">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className=" text-[50px] text-purple-800 font-bold underline text-center">
        App Router Home Page
      </h1>


    </>
  );
}
