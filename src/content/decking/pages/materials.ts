import type { DeckGuidePageContent } from '../deckGuidePage.types';
import { deckBackLink, deckFinalCta, deckMobbsSection } from '../shared';
import { DECK_PLACEHOLDER_MATERIALS, DECK_PLACEHOLDER_MATERIALS_ALT } from '../placeholders';
import { deckCostBands } from '../costBands';

const heroImage = DECK_PLACEHOLDER_MATERIALS;
const materialImage = (filename: string) => `/images/${encodeURIComponent(filename)}`;

export const deckingMaterialsPage: DeckGuidePageContent = {
	metaTitle: 'Decking Materials Compared | Deck Cost Guide',
	metaDescription:
		'Merbau, spotted gum, blackbutt, treated pine framing and composite decking compared for Melbourne conditions — including why fixings and framing are part of the material decision.',
	canonical: '/decking-materials/',
	eyebrow: 'Decking materials · compared',
	h1: 'Decking materials compared',
	intro:
		'“What material?” is usually the first question and rarely the most important one. The framing under the boards and the fixings holding them down are part of the material decision too. Here is how the common choices behave in Melbourne — and where we lean, and why.',
	...deckBackLink,
	heroImage,
	heroAlt: DECK_PLACEHOLDER_MATERIALS_ALT,
	heroImageWidth: 800,
	heroImageHeight: 600,
	sections: [
		{
			id: 'how-to-read',
			title: 'How to read this',
			leads: [
				'There is no single best board. The right choice depends on your budget, how much maintenance you will actually do, the look you want and where the deck sits. We build mostly in natural timber because, detailed properly, it lasts and ages well — but the notes below are meant to help you decide, not to talk you into one answer.',
			],
		},
		{
			id: 'merbau',
			title: 'Merbau',
			variant: 'alt',
			image: {
				src: materialImage('Merbau.png'),
				alt: 'Merbau decking boards showing warm red-brown timber grain',
				width: 1066,
				height: 710,
			},
			leads: [
				`The default hardwood for a lot of Melbourne decks — dense, durable and usually around ${deckCostBands.timberSpeciesPerM2.merbau} as a broad installed guide.`,
			],
			bullets: [
				'<strong>Strengths:</strong> hard, durable, widely available, sits at a sensible price point.',
				'<strong>Watch for:</strong> heavy tannin bleed when new — it will stain light paving, render and grout if it is not managed in the first few rains.',
				'<strong>Best when:</strong> you want a proven hardwood deck without stepping up to the premium species.',
			],
		},
		{
			id: 'spotted-gum',
			title: 'Spotted gum',
			image: {
				src: materialImage('Spotted Gum.png'),
				alt: 'Spotted gum decking boards showing varied Australian hardwood grain',
				width: 1088,
				height: 722,
			},
			leads: [
				`An Australian hardwood that is tough and hard-wearing, with strong grain and colour variation. Broad guide pricing often lands around ${deckCostBands.timberSpeciesPerM2.spottedGum}.`,
			],
			bullets: [
				'<strong>Strengths:</strong> very hard and durable, holds up to traffic and weather, and performs well in exposed areas when maintained.',
				'<strong>Watch for:</strong> hardness makes it less forgiving to work — pre-drilling and good fixings matter.',
				'<strong>Best when:</strong> you want a long-lived feature deck and are happy to maintain it.',
			],
		},
		{
			id: 'blackbutt',
			title: 'Blackbutt',
			variant: 'alt',
			image: {
				src: materialImage('Blackbutt.png'),
				alt: 'Blackbutt decking boards showing pale even hardwood grain',
				width: 1134,
				height: 752,
			},
			leads: [
				`A clean, straight-grained Australian hardwood with a paler, more even tone than spotted gum. Broad guide pricing often lands around ${deckCostBands.timberSpeciesPerM2.blackbutt}.`,
			],
			bullets: [
				'<strong>Strengths:</strong> durable, consistent appearance, a lighter and calmer look than merbau or spotted gum.',
				'<strong>Watch for:</strong> a premium board price, like the other quality hardwoods.',
				'<strong>Best when:</strong> you want a lighter, more uniform hardwood look and accept the higher board cost.',
			],
		},
		{
			id: 'treated-pine',
			title: 'Treated pine — mostly a framing material',
			image: {
				src: materialImage('Treated Pine.png'),
				alt: 'Treated pine decking timber showing lighter softwood boards',
				width: 784,
				height: 716,
			},
			leads: [
				'Treated pine earns its place as the subframe under almost every deck, and as a budget board where the brief calls for it.',
			],
			bullets: [
				'<strong>As framing:</strong> the standard, sensible choice for bearers and joists — provided it is treated to the right hazard level for in-ground vs above-ground use.',
				'<strong>As a deck board:</strong> the cheapest option, fine when detailed and maintained, but softer and shorter-lived than the hardwoods.',
				'<strong>Watch for:</strong> using the wrong treatment level in the wrong spot — that is a structural shortcut, not a saving.',
			],
		},
		{
			id: 'composite',
			title: 'Composite decking — our honest take',
			variant: 'alt',
			leads: [
				"We don't use or recommend composite decking for a number of reasons. They include:",
			],
			bullets: [
				'<strong>Plasticised:</strong> We love the look, feel and texture of real timber. The subtle colour changes and variations are what make timber our preferred decking board material.',
				'<strong>Wastage:</strong> When laying timber decks we can often specify set lengths or random lengths of timber. We do this to both minimise the wastage and also to ensure we achieve a beautiful finish, including random placement of joints. Composite boards only come in 5.4m lengths. This means all the joints/ends have to be in the one place.',
				'<strong>Swelling:</strong> Timber decking boards swell across the grain; that\'s why you need to leave at least a 5mm gap between the boards. Composite decking swells across the grain, along the grain and through the grain. Unlike timber boards that can be butted up to each other, composite boards must have gaps at the end of each length. To compensate for this, composite decks have breaker-boards installed — a board that is laid at 90 degrees to the other boards. This allows a gap to be added.',
				'<strong>Joists:</strong> Timber decks use joists with their centres spaced 450mm apart. Composite decks require 400mm spacing. While this doesn\'t sound like much, on a large deck it can add thousands in additional materials and labour to the sub-frame and for the additional fixing of the decking boards.',
			],
		},
		{
			id: 'fixings-framing',
			title: 'Fixings and framing are part of the “material” decision',
			leads: [
				'It is easy to pick a board and forget that the fixings and frame are doing the real work. They belong in the material conversation.',
			],
			bullets: [
				'Fixing method (hidden vs face) and grade (stainless vs galvanised) change both the look and the lifespan — detailed in the <a class="hero__secondary" href="/timber-decking-cost/">timber decking cost guide</a>.',
				'Joist size and spacing have to suit the board you choose; the wrong frame undoes a good board.',
				'Near pools and the coast, hardware grade is not optional — cheap fixings rust and stain.',
			],
		},
		{
			id: 'melbourne',
			title: 'Which choices suit Melbourne conditions',
			variant: 'alt',
			leads: [
				'Melbourne throws wet winters, dry summers and big day-to-night swings at a deck. That favours durable timber, proper detailing and a frame that can dry out, which is why natural timber is generally preferred for properly detailed timber decks in Melbourne, especially hardwood decks built as part of a larger outdoor renovation.',
			],
			bullets: [
				'<strong>Hardwoods (merbau, spotted gum, blackbutt):</strong> cope well with Melbourne swings when detailed and maintained — our usual recommendation.',
				'<strong>Treated pine:</strong> a fair budget board and the right framing timber, as long as the treatment level matches the situation.',
				'<strong>In every case:</strong> the deck lasts on the strength of the subframe, the airflow and the drainage, not the badge on the board.',
			],
		},
	],
	commonMistakes: [
		'<strong>Choosing the board and ignoring the frame</strong> — the subframe and fixings decide how long any material lasts.',
		'<strong>Treating composite as a fix for bad structure</strong> — it is a board choice, not a substitute for a properly built, ventilated frame.',
		'<strong>Using the wrong treated-pine hazard level</strong> — above-ground timber in the ground is a shortcut that shows up as rot.',
		'<strong>Forgetting merbau tannin</strong> — new merbau bleeds and will stain light paving and render if it is not managed early.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/decking-materials/' },
	faqs: [
		{
			question: 'What is the best decking material for a Melbourne home?',
			answer:
				'For most homes, a durable Australian hardwood like spotted gum or blackbutt, or merbau, detailed on a properly ventilated treated-pine frame. Composite is a sensible choice if you genuinely will not maintain timber. There is no single best — it depends on budget, maintenance and the look you want.',
		},
		{
			question: 'How much maintenance does a timber deck need?',
			answer:
				"A timber deck doesn't need a lot of work to keep it looking good. Oil it once every 6-12 months when it is exposed. If it is undercover, it will likely only need oiling every 2 years. That said, if you neglect the deck oil won't resurrect it. You'll need it sanded and then reoiled.",
		},
		{
			question: 'Does merbau really stain paving?',
			answer:
				'Yes — new merbau bleeds tannin heavily in the first rains and will stain light-coloured paving, render and grout if it is not managed. It is worth planning for, especially where the deck meets stone or concrete. Oxalic acid is highly effective at drawing out the excess tannin from merbau. A professional will know how to minimise any impact to your property.',
		},
		{
			question: 'Can I use the same treated pine for framing and boards?',
			answer:
				'The framing and the surface have different jobs and often different treatment levels. In-ground and ground-contact framing needs a higher hazard-level treatment than above-ground timber. Matching the treatment to the situation is a structural decision. Treated pine decking boards can be used instead of much thicker, treated pine framing timber.',
		},
	],
	finalCta: deckFinalCta,
	mobbsSection: deckMobbsSection,
};
