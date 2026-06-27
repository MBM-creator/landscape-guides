import type { DeckGuidePageContent } from '../deckGuidePage.types';
import { deckBackLink, deckFinalCta, deckMobbsSection } from '../shared';
import { DECK_PLACEHOLDER_POOL } from '../placeholders';
import { deckCostBands } from '../costBands';

// TODO(images): replace with a timber pool-deck edge / coping transition photo.
const heroImage = DECK_PLACEHOLDER_POOL;

export const poolDeckingCostPage: DeckGuidePageContent = {
	metaTitle: 'Pool Decking Cost | Deck Cost Guide',
	metaDescription:
		'What drives pool decking cost — wet-area detailing, slip, drainage, coping transitions, access panels, framing complexity, timber movement and ventilation — and why a pool deck usually costs more than a simple alfresco deck.',
	canonical: '/pool-decking-cost/',
	eyebrow: 'Pool decking · cost factors',
	h1: 'Pool decking cost',
	intro:
		`A deck around a pool is not just an alfresco deck near water. As a broad Melbourne guide, pool decking often sits around ${deckCostBands.poolDeckingPerM2} including GST, and is ${deckCostBands.poolDeckingPremium}. It is a wet area with safety rules, constant splash, services running underneath and a hard edge it has to meet cleanly.`,
	...deckBackLink,
	heroImage,
	heroAlt: 'Placeholder: timber deck meeting a pool edge (photo to follow)',
	heroImageWidth: 800,
	heroImageHeight: 600,
	sections: [
		{
			id: 'wet-area',
			title: 'Wet-area detailing',
			leads: [
				'A pool deck is wet far more often than a normal deck. Splash, dripping swimmers and pool chemicals all work on the timber and the fixings, so the detailing has to be built for it.',
			],
			bullets: [
				'Timber and finishes chosen to cope with constant wetting and pool chemistry.',
				'Fixings stepped up to stainless — galvanised rusts and stains in a chlorinated, splashy environment.',
				'Board gaps and falls set so water clears quickly instead of sitting in the joints.',
			],
		},
		{
			id: 'slip',
			title: 'Slip considerations',
			variant: 'alt',
			leads: [
				'Wet timber underfoot, with bare feet, around a pool — slip resistance stops being a nicety and becomes a safety decision.',
			],
			bullets: [
				'Board profile and finish chosen with wet grip in mind, not just looks.',
				'Grooved or textured boards, or a finish that keeps some bite when wet.',
				'Layout and step detailing that does not create slippery pinch points at the water’s edge.',
			],
		},
		{
			id: 'drainage',
			title: 'Drainage',
			leads: [
				'A pool deck sheds water constantly. If it cannot drain, water sits on the frame and around the pool structure — and that is where problems start.',
			],
			bullets: [
				'Falls that move splash and rain away from the pool and the house.',
				'Board gaps that let water straight through rather than pooling on the surface.',
				'Sub-deck drainage that keeps the frame from sitting in a permanently damp zone.',
			],
		},
		{
			id: 'coping',
			title: 'Pool coping transitions',
			variant: 'alt',
			leads: [
				'Where timber meets the pool coping is the detail that makes or breaks the look — and where movement and water are most likely to cause grief.',
			],
			bullets: [
				'A clean, consistent gap between deck and coping that allows for timber movement.',
				'Detailing that keeps the timber from sitting hard against wet stone or concrete.',
				'A junction that drains and breathes rather than trapping water at the most exposed edge of the deck.',
			],
		},
		{
			id: 'access-panels',
			title: 'Access panels and services',
			leads: [
				'Pools come with plumbing, pumps, lights and sometimes covers — and a fair bit of it ends up under or beside the deck. You have to be able to get back to it.',
			],
			bullets: [
				'Removable sections or hatches over valves, plumbing and equipment that needs servicing.',
				'Planning where pipes and conduits run before the frame goes down, not cutting boards later.',
				'A deck that can be partly lifted without destroying it when something underneath needs work.',
			],
		},
		{
			id: 'framing',
			title: 'Framing complexity',
			variant: 'alt',
			leads: [
				'Framing around a pool shell, services and changing levels is more involved than framing an open rectangle of backyard.',
			],
			bullets: [
				'Working around the pool shell, beam and any raised edges.',
				'Carrying the frame over services while keeping access to them.',
				'Often a raised or split-level deck to meet coping and paving heights, which brings posts, bracing and balustrade into play.',
			],
		},
		{
			id: 'timber-movement',
			title: 'Timber movement',
			leads: [
				'Constant wet-dry cycling makes timber move more around a pool than it does on a sheltered deck. The build has to allow for it.',
			],
			bullets: [
				'Gaps sized so boards can swell and shrink without buckling or trapping water.',
				'Fixings and methods that hold boards securely while letting the timber move.',
				'Species and detailing chosen knowing this deck will get wet and dry out, over and over.',
			],
		},
		{
			id: 'ventilation',
			title: 'Ventilation',
			variant: 'alt',
			leads: [
				'A pool deck takes on more water than most, so getting air under it to dry the frame matters even more than usual.',
			],
			bullets: [
				'Clearance and airflow under the deck so the frame dries between wettings.',
				'Vented edges rather than a sealed skirt that traps damp air against the timber.',
				'Detailing that keeps the underside from becoming a permanently humid, rot-friendly space.',
			],
		},
		{
			id: 'why-more',
			title: 'Why pool decking often costs more than a simple alfresco deck',
			leads: [
				'Put it all together and a pool deck is simply a more demanding build. The boards may look the same, but the work underneath and around the edges is not.',
			],
			bullets: [
				'Wet-area fixings, drainage detailing and slip-aware board selection all add labour and care.',
				'Pool coping transitions, access panels and service access are fiddly, quote-specific details.',
				'Curved edges, low clearances and framing complexity around pools take longer than simple rectangular decks.',
				'Tighter finishing standards and active timber movement management around splash zones increase build time.',
				'Safety-barrier requirements around pools can add balustrade and gate work that a plain alfresco deck never needs.',
			],
		},
	],
	commonMistakes: [
		'<strong>Decking over services with no access</strong> — burying valves and pumps means cutting the deck apart the first time something needs a fix.',
		'<strong>Using galvanised fixings near the pool</strong> — chlorine and constant splash rust them out and stain the timber.',
		'<strong>Ignoring slip until it is wet</strong> — board profile and finish should be chosen for bare wet feet, not just looks.',
		'<strong>Hard-jamming timber against coping</strong> — with no gap for movement or drainage, the edge cups, traps water and lifts.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/pool-decking-cost/' },
	faqs: [
		{
			question: 'Why does pool decking cost more than a normal deck?',
			answer:
				'Because it is a more demanding build: wet-area detailing, stainless fixings, slip-aware boards, fiddly coping transitions, access panels over services, framing around the pool shell and changing levels, plus any safety-barrier requirements. The boards may look similar, but the work underneath and at the edges is not.',
		},
		{
			question: 'What is the best timber for a pool deck?',
			answer:
				'A durable hardwood with good wet grip, fixed with stainless hardware and detailed so it can dry out between wettings. Whatever the species, the gaps, falls, ventilation and coping junction matter as much as the board choice in a wet, splashy environment.',
		},
		{
			question: 'Do I need access panels in a pool deck?',
			answer:
				'If pool plumbing, valves, pumps or lights sit under or beside the deck, yes. Removable sections or hatches let you service the equipment without tearing the deck apart later — it should be planned before the frame goes down.',
		},
		{
			question: 'Is timber slippery around a pool?',
			answer:
				'It can be when wet, which is why board profile and finish should be chosen with wet grip in mind. Grooved or textured boards and the right finish keep some bite underfoot, and good drainage stops water sitting on the surface.',
		},
	],
	finalCta: deckFinalCta,
	mobbsSection: deckMobbsSection,
};
