export type PavingStyle = {
	slug: string;
	name: string;
	image: string;
	alt: string;
	description: string;
	/** Value used by the cost calculator (`?style=` and radio `value`). */
	calculatorStyleParam: string;
	multiplier: number;
	/** When false, the style appears in the calculator but not on the homepage grid. */
	showOnHomepage: boolean;
};

export const pavingStyles: PavingStyle[] = [
	{
		slug: 'crazy-paving',
		name: 'Crazy paving',
		image: '/images/crazy-paving.avif',
		alt: 'Crazy paving natural stone close-up',
		description:
			'Irregular natural stone pieces for organic paths, patios and feature areas. Labour-intensive laying with a natural, textured finish.',
		calculatorStyleParam: 'crazy',
		multiplier: 1.2,
		showOnHomepage: true,
	},
	{
		slug: 'filetti',
		name: 'Filetti',
		image: '/images/filetti.jpg',
		alt: 'Filetti paving with narrow stone pieces',
		description:
			'A Melbourne favourite, long, narrow natural stone laid in a random linear pattern. Similar labour and cutting requirements to crazy paving.',
		calculatorStyleParam: 'filetti',
		multiplier: 1.4,
		showOnHomepage: true,
	},
	{
		slug: 'french-pattern',
		name: 'French pattern',
		image: '/images/french-pattern.webp',
		alt: 'French pattern stone paving layout',
		description:
			'A modular mix of stone sizes laid in a repeating pattern. Classic, structured and suited to larger paved areas.',
		calculatorStyleParam: 'french',
		multiplier: 1.3,
		showOnHomepage: true,
	},
	{
		slug: 'herringbone',
		name: 'Herringbone',
		image: '/images/herringbone.webp',
		alt: 'Herringbone brick paving pattern',
		description:
			'A traditional interlocking pattern often used with brick or rectangular pavers. Strong visual movement and a timeless look.',
		calculatorStyleParam: 'herringbone',
		multiplier: 1.25,
		showOnHomepage: true,
	},
	{
		slug: 'basket-weave',
		name: 'Basket weave',
		image: '/images/basket-weave.jpg',
		alt: 'Basket weave brick paving pattern',
		description:
			'Pairs of pavers laid horizontally and vertically in an alternating woven grid. Suited to clay brick and rectangular stones; works on crushed rock or concrete base depending on site.',
		calculatorStyleParam: 'basketweave',
		multiplier: 1,
		showOnHomepage: false,
	},
	{
		slug: 'steppers',
		name: 'Steppers',
		image: '/images/steppers.webp',
		alt: 'Garden steppers spaced through lawn',
		description:
			'Spaced stones through lawn, gravel or garden areas. Usually lighter coverage than full paving, with costs affected by spacing and stone size.',
		calculatorStyleParam: 'steppers',
		multiplier: 0.8,
		showOnHomepage: true,
	},
	{
		slug: 'stretcher-bond',
		name: 'Stretcher bond',
		image: '/images/stretcher-bond.jpg',
		alt: 'Stretcher bond rectangular paving layout',
		description:
			'A clean, simple rectangular paving layout. Often one of the more predictable options when dimensions and set-out are clear.',
		calculatorStyleParam: 'stretcher',
		multiplier: 1,
		showOnHomepage: true,
	},
];

export const pavingHomepageStyles = pavingStyles.filter((s) => s.showOnHomepage);

/** Calculator radio order: stretcher default first matches previous UX where possible */
export const pavingCalculatorStyleOrder = [
	'stretcher',
	'herringbone',
	'basketweave',
	'steppers',
	'crazy',
	'filetti',
	'french',
] as const;
