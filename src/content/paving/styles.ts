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
			'Irregular stone pieced in by hand. Takes longer than grid paving; joints and drainage need a clear plan before you start.',
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
			'Long thin pieces in a broken stack. Expect plenty of cuts and waste on tight curves, same as tighter crazy paving.',
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
			'Mixed tile sizes in a fixed repeat. Needs careful set-out; suits big flat areas when levels run true.',
		calculatorStyleParam: 'french',
		multiplier: 1.3,
		showOnHomepage: true,
	},
	{
		slug: 'herringbone',
		name: 'Herringbone',
		image: '/images/herringbone-paving.jpg',
		alt: 'Herringbone natural stone paving in light grey tones',
		description:
			'Rectangles laid in a zig-zag so joints lock. Common on driveways and paths; borders mean extra cuts.',
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
			'Pairs of pavers woven in a grid. Works with brick or rectangular stone; base depends on the job.',
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
			'Stepping stones through lawn or gravel. Fewer square metres on the ground, more time getting each stone level.',
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
			'Simple offset rows. Quick when your grid stays square; a crooked bond line is obvious on long runs.',
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
