"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // redirect if not logged in
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth/signin?redirect=/profile/update");
    }
  }, [session, isPending, router]);

  // prefill form with current data
  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    await authClient.updateUser(
      { name, image },
      {
        onSuccess: () => {
          toast.success("Profile updated!");
          router.push("/profile");
          router.refresh(); // refresh navbar + profile page
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Update failed");
        },
        onSettled: () => setLoading(false),
      }
    );
  };

  if (isPending) {
    return <p className="p-20 text-center">Loading...</p>;
  }

  if (!session) return null;

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
              className="w-full mt-1 p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Photo URL</label>
            <input
              type="url"
              value={image}
              onChange={(e)=>setImage(e.target.value)}
              required
              className="w-full mt-1 p-3 border rounded-lg"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
}