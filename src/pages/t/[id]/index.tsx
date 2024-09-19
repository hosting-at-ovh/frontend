'use client'

import {useEffect, useState} from "react"
import {CheckIcon, CopyIcon, FileTextIcon} from "lucide-react"

import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-csharp'
import 'prismjs/themes/prism-twilight.css'
import {ContentLayout} from "../../../components/layout/ContentLayout.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../../../components/ui/card.tsx";
import {Button} from "../../../components/ui/button.tsx";
import ReportDialog from "../../../components/shared/report-dialog.tsx";

export default function TextContentPage() {
	const [isCopied, setIsCopied] = useState(false)

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(textData.content)
			setIsCopied(true)
			setTimeout(() => setIsCopied(false), 2000)
		} catch (err) {
			console.error('Failed to copy text: ', err)
		}
	}

	const textData = {
		title: "The Fibonacci Sequence",
		content: `def fibonacci(n):
  if n <= 1:
    return n
  return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))  # Output: 55`,
		language: "python",
		fileSize: "256 bytes",
		username: "CodeMaster",
		date: "2023-07-17 11:20:00",
	}

	useEffect(() => {
		Prism.highlightAll()
	}, [])

	return (
		<ContentLayout>
			<div className="container mx-auto p-4">
				<Card className="w-full max-w-4xl mx-auto">
					<CardHeader>
						<CardTitle className="text-2xl flex items-center gap-2">
							<FileTextIcon className="h-6 w-6 drama-5 drama-white"/>
							{textData.title}
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="relative">
              <pre className="w-full bg-zinc-900 rounded-lg p-4 overflow-auto text-sm font-mono">
                <code className={`language-${textData.language}`}>
                  {textData.content}
                </code>
              </pre>
							<Button
								onClick={handleCopy}
								className="absolute top-2 right-2 bg-zinc-800 bg-opacity-50 backdrop-blur-lg hover:bg-zinc-700"
							>
								{isCopied ? (
									<CheckIcon className="h-4 w-4"/>
								) : (
									<CopyIcon className="h-4 w-4"/>
								)}
							</Button>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Language:</span>
								<span className="font-medium">{textData.language}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">File size:</span>
								<span className="font-medium">{textData.fileSize}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Uploaded by:</span>
								<span className="font-medium">{textData.username}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Upload date:</span>
								<span className="font-medium">{textData.date}</span>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col gap-2">
						<ReportDialog
							trigger={<p className="text-muted-foreground underline cursor-pointer">Report</p>}
							url={`https://example.com/text/${textData.title}`}
							itemId={textData.title}
						/>
					</CardFooter>
				</Card>
			</div>
		</ContentLayout>
	)
}