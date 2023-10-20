"use client"
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { User2, Lock } from "lucide-react";
import { supabase } from "../utils/supabase";

const formSchema = z.object({
	username: z.string().min(2, { message: "2글자 이상이어야 합니다" }).max(50),
	password: z.string().min(2, { message: "2글자 이상이어야 합니다" }).max(50),
})

const state = {
	email: "abc@gmail.com",
	password: "12345"
}



export default function Login() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log("login commit ")
		let { data, error } = await supabase.auth.signUp({
			email: state.email,
			password: state.password
		})
	}

	return (
		<div className="mx-auto w-full px-3 sm:w-1/3 ">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="company logo" />
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">회원가입</h2>
			</div>
			<Form {...form} >
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className="text-start ">
						<FormField

							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<div className="flex flex-row">
										<User2 />
										<FormControl>

											<Input placeholder="input your message" {...field} />
										</FormControl>
									</div>
								</FormItem>
							)}
						/>
					</div>
					<div className="mt-20  text-start">
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-bold">password</FormLabel>
									<div className="flex flex-row items-center">
										<Lock className="mx-3" />
										<FormControl>
											<Input placeholder="input your message" {...field} className=" outline-0" />
										</FormControl>
									</div>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button type="submit" className="w-full">Submit</Button>
				</form>
			</Form>
		</div >
	)

}
