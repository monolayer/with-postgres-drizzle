"use server";

import { db } from "@/lib/db/drizzle";
import { todos } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function addTodo(_: any, formData: FormData) {
	const text = formData.get("todo") as string;

	if (text.trim()) {
		await db.insert(todos).values({ text });
		revalidatePath("/");
		return { message: "Todo added successfully", input: "" };
	}

	return { message: "Todo cannot be empty", input: text };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function deleteTodo(_: any, formData: FormData) {
	const id = formData.get("id") as string;

	await db.delete(todos).where(eq(todos.id, id));

	revalidatePath("/");
	return { message: "Todo deleted successfully" };
}
