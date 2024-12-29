"use client";

import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

export default function CustomToast({ message, type, isOpen, setIsOpen }) {
	const isSuccess = type === "success";

	return (
		<Toast.Provider>
			<Toast.Root open={isOpen} onOpenChange={setIsOpen} className={`fixed top-0 right-4 z-50 w-[300px] p-4 rounded-lg shadow-lg transition-all duration-300 ${isSuccess ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
				<Toast.Title className="text-lg font-semibold">{isSuccess ? "Success" : "Error"}</Toast.Title>
				<Toast.Description className="mt-1 text-sm">{message}</Toast.Description>
				<Toast.Action asChild altText="Close" className="absolute top-2 right-2">
					<button className="text-lg font-bold text-white">×</button>
				</Toast.Action>
			</Toast.Root>
			<Toast.Viewport />
		</Toast.Provider>
	);
}
