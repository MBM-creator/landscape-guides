import type { DeckGuidePageContent } from '../deckGuidePage.types';
import { deckBackLink, deckFinalCta, deckMobbsSection } from '../shared';
import { DECK_PLACEHOLDER_TIMBER } from '../placeholders';
import { deckCostBands } from '../costBands';

// TODO(images): replace with a timber decking board close-up (grain / oiled finish).
const heroImage = DECK_PLACEHOLDER_TIMBER;

export const timberDeckingCostPage: DeckGuidePageContent = {
	metaTitle: 'What Drives Timber Decking Cost | Deck Cost Guide',
	metaDescription:
		'What actually drives the cost of a timber deck — species, board profile, hidden vs face fixings, subframe quality, ventilation, drainage, finishing and maintenance — and why the cheapest timber is rarely the cheapest deck.',
	canonical: '/timber-decking-cost/',
	eyebrow: 'Timber decking · cost drivers',
	h1: 'What drives timber decking cost',
	intro:
		'The board you choose is only one line in the bill, and rarely the line that decides whether the deck is still solid in ten years. Below is what actually moves the cost of a timber deck — and why the cheapest timber option is not usually the cheapest deck once you count the whole life of it.',
	...deckBackLink,
	heroImage,
	heroAlt: 'Placeholder: close-up of timber decking boards (photo to follow)',
	heroImageWidth: 800,
	heroImageHeight: 600,
	sections: [
		{
			id: 'species',
			title: 'Timber species',
			leads: [
				`Species sets board cost, durability and maintenance. As broad Melbourne guide rates (including GST), merbau is ${deckCostBands.timberSpeciesPerM2.merbau}, spotted gum is ${deckCostBands.timberSpeciesPerM2.spottedGum}, and blackbutt is ${deckCostBands.timberSpeciesPerM2.blackbutt}.`,
			],
			factors: [
				{
					label: 'Treated pine',
					detailHtml:
						'Generally the cheapest finished board and common in budget builds. It can look cheap unless whitewashed or allowed to grey and then oiled. It stays the normal, appropriate framing/subframe timber where treatment levels are specified correctly.',
				},
				{
					label: 'Merbau',
					detailHtml:
						`A dense, durable hardwood around ${deckCostBands.timberSpeciesPerM2.merbau}. It sits above treated pine, below higher-end hardwoods, and needs tannin bleed management near light paving and render.`,
				},
				{
					label: 'Spotted gum and blackbutt',
					detailHtml:
						`Higher-end Australian hardwoods, commonly around ${deckCostBands.timberSpeciesPerM2.spottedGum} (spotted gum) and ${deckCostBands.timberSpeciesPerM2.blackbutt} (blackbutt). They generally cost more up front and reward it in durability and finish quality.`,
				},
			],
		},
		{
			id: 'cost-order',
			title: 'Typical pricing order by board type',
			variant: 'alt',
			bullets: [
				'Treated pine decking (usually cheapest).',
				'Merbau (mid-range hardwood for many projects).',
				'Higher-end hardwoods such as spotted gum and blackbutt.',
				'This order covers board pricing only; project totals still depend heavily on subframe, access, and detailing.',
			],
		},
		{
			id: 'profile',
			title: 'Board profile and width',
			variant: 'alt',
			leads: [
				'Profile and width change the look, the board count, the fixings and how the deck behaves as the timber moves.',
			],
			bullets: [
				'<strong>Width:</strong> wider boards cover ground faster but cup and move more — narrower boards are more stable but mean more boards, more fixings and more labour.',
				'<strong>Thickness:</strong> thicker boards can span more and feel more solid, but cost more and need framing to suit.',
				'<strong>Edge profile:</strong> square-edge, pencil-round or grooved (for hidden clips) each change how the board is fixed and how it sheds water.',
			],
		},
		{
			id: 'fixings',
			title: 'Hidden fixings vs face fixings',
			leads: [
				'How the boards are held down is a real fork in both cost and finish. Neither is wrong — they suit different boards and budgets.',
			],
			factors: [
				{
					label: 'Face fixing',
					detailHtml:
						'Screwed from the top. Faster, cheaper and easy to maintain or replace a board later. Done well it looks tidy; done badly it splits boards and leaves rust streaks. In hardwoods the boards should be pre-drilled.',
				},
				{
					label: 'Hidden fixing',
					detailHtml:
						'Clips or fasteners that leave a clean, screw-free board face and even gaps. It costs more in hardware and labour, and replacing a single board later is more work — but the finish is the reason people choose it.',
				},
				{
					label: 'Fixing quality',
					detailHtml:
						'Screw grade matters as much as the method. Stainless near pools and the coast, quality galvanised elsewhere — cheap fixings rust, stain the timber and let go early.',
				},
			],
		},
		{
			id: 'subframe',
			title: 'Subframe quality',
			variant: 'alt',
			leads: [
				'You cannot see the subframe once the boards are down, which is exactly why it is the easiest place for a cheap quote to save money. It is also what makes or breaks the deck.',
			],
			bullets: [
				'Footings and posts sized for the load and the ground — not guessed off a standard detail.',
				'Bearers and joists at the right size and spacing for the board: tighter joist spacing costs more timber but stops boards flexing and cupping.',
				'Framing timber treated to the correct hazard level for in-ground or above-ground use.',
				'A frame that is built to stay dry — which brings in ventilation and drainage below.',
			],
		},
		{
			id: 'ventilation',
			title: 'Ventilation',
			leads: [
				'Timber needs to dry out between wettings. A deck with no airflow underneath stays damp, and damp timber rots — frame first, then boards from the underside.',
			],
			bullets: [
				'Clearance under the deck so air can move, not a sealed box against the ground.',
				'Open or vented edges rather than a solid skirt that traps moisture.',
				'Enough gap between boards for the deck to breathe and the timber to move.',
			],
		},
		{
			id: 'drainage',
			title: 'Drainage',
			variant: 'alt',
			leads: [
				'Water that cannot get away sits on the frame and in the joints — and that is where decks quietly fail.',
			],
			bullets: [
				'Falls that move water off and away rather than letting it pool on bearers and joists.',
				'Board gaps that let water through instead of holding it on the surface.',
				'Detailing at the house junction so water never gets trapped against the wall or the ledger.',
			],
		},
		{
			id: 'finishing',
			title: 'Finishing',
			leads: [
				'The coating is part of the build cost and part of the look. Oiled, the timber stays warm and rich; left bare, most species silver off to grey.',
			],
			bullets: [
				'Initial oil or coating, which varies with the species and the product.',
				'Whether you want the timber to hold its colour or are happy to let it grey naturally.',
				'Tannin management on species like merbau so the first rains do not stain nearby surfaces.',
			],
		},
		{
			id: 'maintenance',
			title: 'Maintenance',
			variant: 'alt',
			leads: [
				'A timber deck is a maintained surface. How much upkeep you are willing to do should shape the timber you choose — not the other way around.',
			],
			bullets: [
				'Re-oiling every year or two depending on exposure and how much colour you want to keep.',
				'A clean and re-coat is far cheaper than replacing boards that were left to deteriorate.',
				'If you genuinely will not maintain it, that is a fair reason to look at composite — covered objectively in the <a class="hero__secondary" href="/decking-materials/">materials guide</a>.',
			],
		},
		{
			id: 'lifespan',
			title: 'Lifespan',
			leads: [
				'How long a timber deck lasts is mostly decided by the frame, the airflow and the drainage — not by the brand of board on top.',
			],
			bullets: [
				'A well-framed, well-ventilated hardwood deck that gets re-coated can last decades.',
				'A cheap board on a good frame outlasts a good board on a bad frame.',
				'Most early failures trace back to moisture that could not escape, not to the timber being “bad”.',
			],
		},
		{
			id: 'cheapest',
			title: 'Why the cheapest timber is rarely the cheapest deck',
			variant: 'alt',
			leads: [
				'The lowest board price is tempting, but the real cost of a deck runs over its whole life. Cheap up front often means dear later.',
			],
			bullets: [
				'A soft, low-cost board on a light frame moves, cups and wears faster — and gets replaced sooner.',
				'Cheap fixings rust and stain, and pulling them to redo the deck costs more than doing it once.',
				'Money saved by skipping ventilation and drainage comes back as a rotted frame.',
				'Spending more on subframe and detailing is usually what makes the deck cheaper to own long term.',
			],
		},
	],
	commonMistakes: [
		'<strong>Choosing the board, ignoring the frame</strong> — the subframe decides lifespan far more than the species on top.',
		'<strong>Buying cheap fixings</strong> — rust streaks and split boards are a false economy, especially in hardwood and near pools.',
		'<strong>Skipping ventilation to save a bit</strong> — a deck that cannot dry out rots from underneath where you never see it.',
		'<strong>Assuming timber is maintenance-free</strong> — it is not; budget for re-coating or accept the silvered, weathered look.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/timber-decking-cost/' },
	faqs: [
		{
			question: 'Is hardwood decking worth the extra cost over treated pine?',
			answer:
				'For most homeowners, yes — hardwoods like spotted gum, blackbutt and merbau are harder, more durable and age better. Treated pine is a fair budget choice when it is detailed and maintained well, but it is softer and shorter-lived.',
		},
		{
			question: 'Are hidden fixings better than face fixings?',
			answer:
				'They are not better, just different. Hidden fixings give a clean, screw-free board face and even gaps at a higher cost; face fixing is faster, cheaper and easier to repair later. The right choice depends on the board, the budget and the look you want.',
		},
		{
			question: 'How long does a timber deck last?',
			answer:
				'A well-framed, ventilated hardwood deck that is re-coated can last decades. Lifespan is decided mostly by the frame, the airflow and the drainage — most early failures come from trapped moisture, not the timber itself.',
		},
		{
			question: 'How much maintenance does a timber deck need?',
			answer:
				'Plan on cleaning and re-oiling every year or two, depending on exposure and how much colour you want to keep. Left bare, most timber silvers off to grey — that is a look some people like, not a structural problem on its own.',
		},
	],
	finalCta: deckFinalCta,
	mobbsSection: deckMobbsSection,
};
