"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import courses from "@/data/courses.json";

export default function ProtectedCoursePage() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    const { id } = useParams();
    const course = courses.find(c => c.id == id);

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/auth/signin");
        }
    }, [session, isPending, router]);

    if (isPending) return <p className="p-20 text-center">Checking Authentication...</p>;
    if (!session) return null;

    return (
        <div className="max-w-4xl mx-auto py-20 px-4">
            <h1 className="text-5xl font-black mb-6">{course?.title}</h1>
            <div className="aspect-video bg-gray-200 rounded-3xl mb-10 overflow-hidden">
                <img src={course?.image} className="w-full h-full object-cover" />
            </div>
            <div className="prose prose-lg">
                <h2 className="text-2xl font-bold">Course Curriculum</h2>
                <p>Welcome, {session.user.name}! As a premium student, you have full access.</p>
                <ul className="mt-4 space-y-2">
                    <li>Module 1: Introduction to Advanced Concepts</li>
                    <li>Module 2: Real-world Implementation</li>
                    <li>Module 3: Final Deployment</li>
                </ul>
            </div>
        </div>
    );
}