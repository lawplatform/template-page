import { publicProcedure, router } from "./trpc";
import { z } from 'zod';
import path from 'path';
import fs from 'fs';

export const appRouter = router({
	getTodos: publicProcedure.query(async () => {
		return [10, 20, 30, 40]
	}),
	userById: publicProcedure
		.input(z.string())
		.query(async (opts) => {
			const { input } = opts;
			const user = input;
			return user;
		}),
	getImages: publicProcedure.query(async () => {
		const galleryDirectory = path.join(process.cwd(), '/public/gallery/');
		try {
			const files = await fs.promises.readdir(galleryDirectory);
			const result = files.filter((file: string) => path.extname(file) === '.jpg');
			return JSON.stringify(result);
		} catch (err) {
			console.error("error occurred", err);
			return JSON.stringify([]);
		}
	}),
});


export type AppRouter = typeof appRouter;
