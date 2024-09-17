interface Props {
	author: string;
	title: string;
	description: string;
	image: string;
	color: string;
}

export default function DiscordEmbed({author, title, description, image, color}: Props) {
	return (
		<div className="w-full px-4 flex justify-center">
			<div
				className={`bg-[#36393F] rounded-[4px] p-[10px] mb-[10px] flex flex-col justify-center mr-[10px] w-[26%]`}
				style={{borderLeft: `5px solid ${color}`}}
			>
				<span className={'text-[#B9BBBE] font-medium text-[12px] mb-[8px]'}>{author}</span>
				<span className={'text-white font-bold text-[1rem] mb-[-5px]'}>{title}</span>
				<span
					className={'text-[#DCDDDE] font-normal text-[14px] mb-[12px] mt-[12px]'}
					style={{whiteSpace: 'pre-wrap'}}
				>
          {description.replace(/%newline%/g, '\n')}
        </span>
				<span className={'mb-[5px]'}>
          <img className={'w-full h-auto rounded-sm'} src={image} alt="undefined"/>
        </span>
			</div>
		</div>
	);
}
