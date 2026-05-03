"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Update() {
  const router = useRouter();

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <h2 className="text-2xl font-bold mb-6">Update Your Info</h2>
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Updated!"); router.push("/profile"); }}>
          <div className="mb-4">
            <label className="text-sm font-medium">New Name</label>
            <input type="text" className="w-full mt-1 p-3 border rounded-lg" required />
          </div>
          <div className="mb-6">
            <label className="text-sm font-medium">Photo URL</label>
            <input type="url" className="w-full mt-1 p-3 border rounded-lg" required />
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">Update Information</button>
        </form>
      </div>
    </div>
  );
}