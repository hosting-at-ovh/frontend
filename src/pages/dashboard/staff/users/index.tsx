import DashboardLayout from "../../../../components/layout/DashboardLayout.tsx";
import {Card, CardContent} from "../../../../components/ui/card.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../../../../components/ui/table.tsx";
import {BiCog} from "react-icons/bi";
import {Input} from "../../../../components/ui/input.tsx";
import {SearchIcon} from "lucide-react";

const fakeData = [
	{
		id: 'FDS-4182',
		email: 'john.doe@gmail.com',
		username: 'John Doe',
		role: 'Admin'
	},
	{
		id: 'FDS-4183',
		email: 'jane.smith@yahoo.com',
		username: 'Jane Smith',
		role: 'User'
	},
	{
		id: 'FDS-4184',
		email: 'robert.jones@outlook.com',
		username: 'Robert Jones',
		role: 'Moderator'
	},
	{
		id: 'FDS-4185',
		email: 'alice.williams@protonmail.com',
		username: 'Alice Williams',
		role: 'Admin'
	},
	{
		id: 'FDS-4186',
		email: 'michael.brown@icloud.com',
		username: 'Michael Brown',
		role: 'User'
	},
	{
		id: 'FDS-4187',
		email: 'emily.davis@hotmail.com',
		username: 'Emily Davis',
		role: 'User'
	},
	{
		id: 'FDS-4188',
		email: 'daniel.miller@gmail.com',
		username: 'Daniel Miller',
		role: 'Moderator'
	},
	{
		id: 'FDS-4189',
		email: 'sophia.martin@live.com',
		username: 'Sophia Martin',
		role: 'User'
	},
	{
		id: 'FDS-4190',
		email: 'james.lee@gmail.com',
		username: 'James Lee',
		role: 'Admin'
	},
	{
		id: 'FDS-4191',
		email: 'olivia.wilson@aol.com',
		username: 'Olivia Wilson',
		role: 'User'
	},
];


export default function Index() {
	return (
		<DashboardLayout>
			<div className="p-6 space-y-6">

				<div className="grid grid-flow-row gap-12">
					<Card>
						<CardContent className="flex flex-col p-6 gap-4 w-full">
							<div className={'flex flex-col gap-1'}>
								<h1 className={'text-2xl font-bold'}>Users</h1>
								<p className={'font-medium text-gray-400'}>All users registered on this site.
								</p>
							</div>
							<div>
								<Input
									icon={<SearchIcon className={'w-5 h-5'}/>}
									placeholder={'Search users'}
									className={'w-full'}
								/>
							</div>
							<div className={'w-full'}>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>ID</TableHead>
											<TableHead>Email</TableHead>
											<TableHead>Username</TableHead>
											<TableHead>Role</TableHead>
											<TableHead className={'text-right'}>Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{fakeData.map((user, index) => (
											<TableRow key={index}>
												<TableCell>{user.id}</TableCell>
												<TableCell>{user.email}</TableCell>
												<TableCell>{user.username}</TableCell>
												<TableCell>{user.role}</TableCell>
												<TableCell className="text-right">
													<button
														className={'w-5 h-5 backdrop-blur-lg'}>
														<BiCog className={'w-5 h-5 text-center'}/>
													</button>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</DashboardLayout>
	)
}
