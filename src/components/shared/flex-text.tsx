export default function FlexText({username}: { username: string }) {

	const roleParticles = [
		{
			role: "staff",
			particle: "/assets/sparkles/staff.webp"
		},
		{
			role: "vip",
			particle: "/assets/sparkles/vip.webp"
		},
		{
			role: "premium",
			particle: "/assets/sparkles/premium.webp"
		}
	]

	const roleColor = [
		{
			role: "staff",
			color: "var(--red-500)"
		},
		{
			role: "vip",
			color: "var(--yellow-500)"
		},
		{
			role: "premium",
			color: "var(--blue-500)"
		},
		{
			role: "user",
			color: "var(--main-one)"
		}
	]

	const currentRoleParticle = roleParticles.find(rp => rp.role === 'staff')?.particle;
	const currentRoleColor = roleColor.find(rc => rc.role === 'staff')?.color;

	return (
		<span className={'text-glow-current'} style={{
			backgroundImage: `url(${currentRoleParticle})`,
			backgroundPosition: 'center',
			backgroundRepeat: 'repeat',
			backgroundSize: 'cover',
			color: currentRoleColor
		}}>{username}</span>
	)
}
