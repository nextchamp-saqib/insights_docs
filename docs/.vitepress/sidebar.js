export default function sidebar() {
	return [
		{
			text: "Getting Started",
			collapsible: false,
			items: [
				{
					text: "Setup your account",
					link: "/getting-started/setup-your-account",
				},
				{ text: "Create a query", link: "/getting-started/create-a-query" },
				{
					text: "Create a dashboard",
					link: "/getting-started/create-a-dashboard",
				},
			],
		},
		{
			text: "Miscellaneous",
			collapsible: false,
			items: [
				{
					text: "FAQ",
					link: "/miscellaneous/faq",
				},
			],
		},
	];
}
