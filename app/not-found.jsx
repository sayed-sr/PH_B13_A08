import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">


  <h1 className="text-9xl font-black text-gray-200">404</h1>


      <p className="text-2xl font-bold -mt-8 mb-8">Skill Not Found!</p>



 <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg">Go Home</Link>
    </div>
  );
}