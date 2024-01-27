interface PropsType {
	children: React.ReactNode
}

const PdfConverter = ({ children }: PropsType) => {
	return (
		<div>
			<div className="hidden">
				{children}
			</div>
		</div>
	);
};

export default PdfConverter;
