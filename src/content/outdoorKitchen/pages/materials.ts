import type { OutdoorKitchenGuidePageContent } from '../outdoorKitchenGuidePage.types';
import { outdoorKitchenBackLink, outdoorKitchenFinalCta, outdoorKitchenMobbsSection } from '../shared';

// TODO: replace hero image with outdoor kitchen benchtop / cladding photo
const heroImage = '/images/travertine-pool-paving.png';

export const outdoorKitchenMaterialsPage: OutdoorKitchenGuidePageContent = {
	metaTitle: 'Outdoor Kitchen Materials Guide | Benchtops & Cladding | Made By Mobbs Landscapes',
	metaDescription:
		'Best materials for outdoor kitchens: benchtops, cladding, cabinetry and flooring — what holds up outside and what needs ongoing upkeep.',
	canonical: '/outdoor-kitchen-materials/',
	eyebrow: 'Outdoor kitchen planning · materials',
	h1: 'Best materials for outdoor kitchens',
	intro:
		'UV, rain, grease and temperature swings punish finishes that work fine indoors. Stone, render and cabinetry all behave differently once they sit beside a BBQ for five summers. Pick materials for maintenance you will actually do.',
	...outdoorKitchenBackLink,
	heroImage,
	heroAlt: 'Travertine paving in a residential outdoor setting',
	sections: [
		{
			id: 'benchtops',
			title: 'Benchtops and horizontal surfaces',
			factors: [
				{
					label: 'Granite and natural stone',
					detailHtml:
						'Durable and heat-tolerant if sealed and resealed. Grease and citrus stain if neglected. Thicker slabs need proper support — especially on cantilevered bar seating.',
				},
				{
					label: 'Porcelain slab',
					detailHtml:
						'Low porosity, consistent colour, good near BBQ heat if rated for exterior use. Joints and substrate must be stiff — large format can chip on sharp impacts.',
				},
				{
					label: 'Concrete or rendered bench',
					detailHtml:
						'Can suit rustic gardens but cracks if the slab moves. Needs sealing and accepts that hairline cracks may appear over time.',
				},
				{
					label: 'Stainless or tiled inserts',
					detailHtml:
						'Practical beside the BBQ for easy wipe-down. Breaks up stone runs and helps protect the hottest zone of the bench.',
				},
			],
		},
		{
			id: 'cabinetry',
			title: 'Cabinet carcasses and doors',
			variant: 'alt',
			leads: [
				'Moisture and insects find weak points in standard interior cabinetry. Outdoor-rated construction costs more upfront and saves replacement later.',
			],
			bullets: [
				'Marine-grade plywood or aluminium-framed cabinets resist swelling better than standard MDF',
				'Doors in aluminium, compressed fibre cement or hardwood last longer than laminate not rated for exterior UV',
				'Hardware — hinges and runners — should be stainless or coated; cheap hinges rust and doors go out of square',
				'Leave ventilation gaps behind fridges and BBQ cavities so heat does not cook the carcass from inside',
			],
		},
		{
			id: 'cladding',
			title: 'Vertical cladding and faces',
			factors: [
				{
					label: 'Rendered block or Hebel',
					detailHtml:
						'Common in Melbourne gardens. Needs capping details so water does not sit on horizontal ledges. Paint or texture must suit exterior exposure.',
				},
				{
					label: 'Stone veneer or stacked stone',
					detailHtml:
						'Matches paving when detailed well. Watch ledges where grease smoke collects — rough stone is harder to clean.',
				},
				{
					label: 'Timber',
					detailHtml:
						'Works under cover with the right species and oiling schedule. Full sun and BBQ grease make timber high maintenance unless you accept ageing.',
				},
			],
		},
		{
			id: 'flooring',
			title: 'Flooring around the kitchen',
			leads: [
				'The floor catches grease, spills and foot traffic from the house. It should drain, clean easily and tie visually to the rest of the yard.',
			],
			bullets: [
				'Natural stone and concrete pavers suit most kitchens if falls and drainage are right',
				'Porcelain pavers work when you want lower porosity near food prep',
				'Avoid slippery polished stone in splash zones — especially if the pool is nearby',
				'Set floor levels relative to internal floor and door sills before cabinetry is built',
			],
		},
	],
	commonMistakes: [
		'<strong>Interior cabinetry outdoors</strong> — Swollen doors and rusted hinges usually show up in year two.',
		'<strong>Unsealed porous stone beside the BBQ</strong> — Grease soaks in; stains are permanent or need aggressive cleaning.',
		'<strong>No drip edge on benchtops</strong> — Water runs straight into cabinet faces and damages doors.',
		'<strong>Mixing materials without expansion joints</strong> — Stone, render and steel move differently in heat — cracks follow.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/outdoor-kitchen-materials/' },
	faqs: [
		{
			question: 'What is the best benchtop for an outdoor kitchen?',
			answer:
				'Porcelain slab and dense granite both work when sealed and supported correctly. Beside the BBQ, many people use a stainless insert for the hottest section and stone elsewhere.',
		},
		{
			question: 'Can I use the same stone as my paving on the bench?',
			answer:
				'Often yes for visual consistency, but benchtops need thicker stock, edge detailing and sealing suited to food and grease — not just foot traffic.',
		},
		{
			question: 'How often should outdoor kitchen stone be sealed?',
			answer:
				'Depends on stone porosity and use. High-use BBQ benches may need resealing yearly; some porcelain needs little more than normal cleaning. Follow the sealer and stone supplier guidance.',
		},
	],
	finalCta: outdoorKitchenFinalCta,
	mobbsSection: outdoorKitchenMobbsSection,
};
