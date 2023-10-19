
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod"

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",

	}),
	email: z.string().min(1, "Email is required").email('Invalid email'),
	password: z.string().min(1, 'password is required').min(8, 'password must have than 8 characters'),
	confirmPassword: z.string().min(1, 'password confirmation is required'),
}).refine((data) => data.password === data.confirmPassword, {
	message: "Passwords do not match",
	path: ['password', 'confirmPassword'],
})


export default function Login_basic() {



	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
			email: "",
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}
	return (
		<>
			<div className="bg-teal-300">
				<Form {...form} >
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 px-10">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
					<p>this is login page or you could down load login scenario</p>
				</Form>
			</div>
		</>
	);
}
