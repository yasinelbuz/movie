import Component from "@/components";

type LayoutPropsTypes = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutPropsTypes) {
	return (
		<>
			<Component.Header />
			{children}
		</>
	);
}
