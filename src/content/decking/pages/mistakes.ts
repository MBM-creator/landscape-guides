import type { DeckGuidePageContent } from '../deckGuidePage.types';
import { deckBackLink, deckFinalCta, deckMobbsSection } from '../shared';
import { DECK_PLACEHOLDER_MISTAKES } from '../placeholders';

// TODO(images): replace with a weathered / failed deck detail (rot, cupping, rust streaks).
const heroImage = DECK_PLACEHOLDER_MISTAKES;

export const deckingMistakesPage: DeckGuidePageContent = {
	metaTitle: 'Common Deck Mistakes (and How They Cost You) | Deck Cost Guide',
	metaDescription:
		'The deck mistakes that turn a cheap build into an expensive repair — poor ventilation, bad drainage, weak subframes, wrong fixings, decks built too low, bad step planning, ignoring timber movement and maintenance, and choosing on price alone.',
	canonical: '/decking-mistakes/',
	eyebrow: 'Deck mistakes · what to avoid',
	h1: 'Common deck mistakes',
	intro:
		'Most decks do not fail because the timber was bad. They fail because of decisions made before the first board went down — and almost always around water, air and structure. These are the mistakes we see most often, why they cost you, and what good practice looks like instead.',
	...deckBackLink,
	heroImage,
	heroAlt: 'Placeholder: weathered deck showing cupping and grey timber (photo to follow)',
	heroImageWidth: 800,
	heroImageHeight: 600,
	sections: [
		{
			id: 'water-air',
			title: 'Water and air — where most decks actually die',
			leads: [
				'A deck that cannot dry out is a deck on a countdown. Get the moisture out and most other things are recoverable; trap it and the frame rots from where you cannot see.',
			],
			factors: [
				{
					label: '1. Poor ventilation',
					detailHtml:
						'A deck sealed against the ground with no airflow stays damp underneath. The frame and the underside of the boards never dry, and rot starts below the surface where nothing warns you. Good practice: clearance and vented edges so air can move under the whole deck.',
				},
				{
					label: '2. Bad drainage',
					detailHtml:
						'Water that pools on bearers and joists, or gets trapped at the house junction, works away at the timber and the fixings. Good practice: falls that move water off and away, board gaps that drain, and detailing that keeps water from sitting against the wall.',
				},
				{
					label: '3. Ignoring timber movement',
					detailHtml:
						'Timber swells and shrinks with the weather. Boards jammed tight with no gap, or fixed in a way that fights the movement, cup, split and lift. Good practice: gaps sized for the species and fixings that hold securely while letting the timber move.',
				},
			],
		},
		{
			id: 'structure',
			title: 'Structure — the part you cannot see, and cannot cheap out on',
			variant: 'alt',
			leads: [
				'Once the boards are down, the frame is invisible — which is exactly why it is the favourite place to save money on a cheap quote. It is also what keeps the deck safe and flat for decades.',
			],
			factors: [
				{
					label: '4. Weak subframes',
					detailHtml:
						'Too few footings, footings too shallow for the ground, undersized bearers or joists spaced too wide — all cheaper to build and all reasons a deck feels bouncy and moves over time. Good practice: footings and framing sized for the load, the span and the actual ground.',
				},
				{
					label: '5. Wrong fixings',
					detailHtml:
						'Cheap or under-spec screws rust, stain the boards and let go early. The wrong screw in a dense hardwood splits the board on the way in. Good practice: the right grade for the setting — stainless near pools and the coast — and pre-drilling hardwoods.',
				},
				{
					label: '6. Building too low to the ground',
					detailHtml:
						'A deck laid almost on the dirt is cheap and looks neat at first, but with no clearance it cannot breathe or drain and it rots from underneath. Good practice: enough lift to ventilate and drain, even on a “ground-level” deck.',
				},
			],
		},
		{
			id: 'planning',
			title: 'Planning and choices',
			factors: [
				{
					label: '7. Poor step planning',
					detailHtml:
						'Steps that are an afterthought end up too steep, too narrow, awkwardly placed or non-compliant — annoying daily and expensive to redo. Good practice: work out levels, stairs and how people actually move through the space before framing.',
				},
				{
					label: '8. Ignoring maintenance',
					detailHtml:
						'A timber deck is a maintained surface. Never re-coating it will not collapse the deck, but it weathers and ages far faster, and neglected boards eventually need replacing. Good practice: budget for re-oiling, or choose a material and look that suits the upkeep you will really do.',
				},
				{
					label: '9. Choosing only on the cheapest quote',
					detailHtml:
						'The lowest price almost always describes a lighter build — weaker subframe allowances, fewer footings, wider joist spacing, cheaper fixings, no ventilation thinking, or stairs and balustrade quietly left out. The subframe is often the biggest hidden cost driver behind cheap quotes. Good practice: compare structure and inclusions, not just the headline rate. See the <a class="hero__secondary" href="/decking-cost-melbourne/">Melbourne deck cost guide</a> for what to line up.',
				},
				{
					label: '10. Treating the deck as separate from the landscape',
					detailHtml:
						'A deck planned in isolation clashes with paving levels, drainage, planting and how the rest of the yard is used. Good practice: design the deck as part of the whole backyard — levels, falls, access and materials all talking to each other.',
				},
			],
		},
		{
			id: 'pattern',
			title: 'The pattern behind nearly all of them',
			variant: 'alt',
			leads: [
				'Read back through the list and almost every mistake is the same story: water that could not escape, air that could not move, or structure that was trimmed to win on price. Spend a little more attention on the frame, the airflow and the drainage, and most of these never happen.',
			],
			bullets: [
				'Get the moisture out — ventilation and drainage first.',
				'Build the frame for the ground and the span, not the quote.',
				'Use fixings that suit the timber and the setting.',
				'Plan the deck as part of the backyard, not a board count bolted on at the end.',
			],
		},
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/decking-mistakes/' },
	faqs: [
		{
			question: 'What is the most common deck mistake?',
			answer:
				'Trapped moisture. A deck built too low or sealed in with no airflow cannot dry out, so the frame and the underside of the boards rot from where you never see it. Ventilation and drainage are the single biggest thing that decides how long a deck lasts.',
		},
		{
			question: 'Why do cheap decks cost more in the long run?',
			answer:
				'Because the savings usually come out of the parts that keep a deck alive — fewer footings, wider joist spacing, cheaper fixings and no ventilation thinking. Those choices show up later as movement, rust stains and rot, and fixing them costs more than building it properly once.',
		},
		{
			question: 'How do I avoid choosing the wrong deck builder?',
			answer:
				'Compare quotes on the structure and inclusions, not the headline rate. Ask about footing depth and count, joist size and spacing, framing treatment level, fixing grade, and whether ventilation, drainage, stairs and balustrade are in the price. A builder who can answer those clearly is usually the safer choice.',
		},
		{
			question: 'Does a low deck still need ventilation?',
			answer:
				'Yes — arguably more than a raised one. A deck laid almost on the ground has the least room for air to move, so without deliberate clearance and vented edges it stays damp and rots from underneath.',
		},
	],
	finalCta: deckFinalCta,
	mobbsSection: deckMobbsSection,
};
