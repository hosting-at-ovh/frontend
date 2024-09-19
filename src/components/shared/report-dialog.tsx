'use client'

import React, {useState} from 'react'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "../ui/dialog.tsx"
import {Label} from "../ui/label.tsx";
import {Input, LabelInputContainer} from "../ui/input.tsx";
import {Button} from "../ui/button.tsx";

interface Props {
	trigger: React.ReactNode
	url: string
	itemId: string
}

export default function ReportDialog({trigger, url, itemId}: Props) {
	const [reason, setReason] = useState('')
	const [description, setDescription] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Submitting report:', {itemId, reason, description})
		console.log(url);
		setReason('')
		setDescription('')
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				{trigger}
			</DialogTrigger>
			<DialogContent
				className="sm:max-w-[425px] bg-black bg-opacity-20 backdrop-blur-lg border-gray-400 border-opacity-20 text-white">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">Report Item</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<LabelInputContainer className="mb-6">
							<Label htmlFor="reason">Reason for reporting</Label>
							<Input
								type="text"
								id="reason"
								name="reason"
								className="w-full"
								placeholder="e.g. Inappropriate content"
								value={reason}
								onChange={(e) => setReason(e.target.value)}
								required
							/>
						</LabelInputContainer>
					</div>
					<div className="space-y-2">
						<LabelInputContainer className="mb-6">
							<Label htmlFor="description">Description</Label>
							<Input
								type="text"
								id="description"
								name="description"
								className="w-full"
								placeholder="Please provide more details"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								required
							/>
						</LabelInputContainer>
					</div>

					<div className="flex justify-end space-x-2">
						<Button type="submit"
								className="bg-main-two hover:bg-main-one text-white drama-4 drama-main-two hover:drama-main-one transition-all">
							Submit Report
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}