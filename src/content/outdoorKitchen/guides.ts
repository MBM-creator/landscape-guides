export type OutdoorKitchenGuideCard = {
	href: string;
	title: string;
	description: string;
	image: string;
	alt: string;
};

// TODO: replace card images with dedicated outdoor kitchen photos (currently paving placeholders)
export const outdoorKitchenHomepageGuides: OutdoorKitchenGuideCard[] = [
	{
		href: '/outdoor-kitchen-cost-melbourne-sydney/',
		title: 'Outdoor kitchen costs',
		description: 'Broad price bands for Melbourne and Sydney — and what actually moves the quote.',
		image: '/images/pool-paving.jpg',
		alt: 'Outdoor entertaining area with paved flooring beside a pool',
	},
	{
		href: '/outdoor-kitchen-design-guide/',
		title: 'Design and layout',
		description: 'Circulation, bench depth, cooking zones, cover and where smoke goes on a typical block.',
		image: '/images/herringbone-paving.jpg',
		alt: 'Paved outdoor area with natural stone flooring',
	},
	{
		href: '/outdoor-kitchen-materials/',
		title: 'Materials',
		description: 'Benchtops, cladding and cabinetry — what holds up outside and what needs upkeep.',
		image: '/images/travertine-pool-paving.png',
		alt: 'Travertine paving in a residential outdoor setting',
	},
	{
		href: '/bbq-appliance-planning/',
		title: 'BBQ and appliances',
		description: 'Built-in BBQs, fridges, sinks, gas, power and access panels for future servicing.',
		image: '/images/stretcher-bond.jpg',
		alt: 'Stretcher bond paved outdoor area',
	},
	{
		href: '/covered-outdoor-kitchens/',
		title: 'Covered kitchens',
		description: 'Pergolas, rooflines, ventilation, rain and when you need a permit.',
		image: '/images/french-pattern.webp',
		alt: 'French pattern paved outdoor entertaining space',
	},
	{
		href: '/outdoor-kitchen-mistakes/',
		title: 'Mistakes to avoid',
		description: 'The practical errors we see when outdoor kitchens are planned too late or too far from the house.',
		image: '/images/crazy-paving.avif',
		alt: 'Natural stone crazy paving in an outdoor area',
	},
];
