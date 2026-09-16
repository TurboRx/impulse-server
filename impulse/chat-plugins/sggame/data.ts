export interface StarterGen {
	gen: number;
	region: string;
	starters: string[];
}

export const STARTER_GENS: Record<number, StarterGen> = {
	1: { gen: 1, region: 'Kanto', starters: ['bulbasaur', 'charmander', 'squirtle', 'pikachu'] },
	2: { gen: 2, region: 'Johto', starters: ['chikorita', 'cyndaquil', 'totodile'] },
	3: { gen: 3, region: 'Hoenn', starters: ['treecko', 'torchic', 'mudkip'] },
	4: { gen: 4, region: 'Sinnoh', starters: ['turtwig', 'chimchar', 'piplup'] },
	5: { gen: 5, region: 'Unova', starters: ['snivy', 'tepig', 'oshawott'] },
	6: { gen: 6, region: 'Kalos', starters: ['chespin', 'fennekin', 'froakie'] },
	7: { gen: 7, region: 'Alola', starters: ['rowlet', 'litten', 'popplio'] },
	8: { gen: 8, region: 'Galar', starters: ['grookey', 'scorbunny', 'sobble'] },
	9: { gen: 9, region: 'Paldea', starters: ['sprigatito', 'fuecoco', 'quaxly'] },
};

export const ALL_STARTERS: string[] = Object.values(STARTER_GENS).flatMap(g => g.starters);

export interface SGLocation {
	id: string;
	name: string;
	gen: number;
	region: string;
	preview: string[];
	species: string[];
}

export const SG_LOCATIONS: Record<string, SGLocation> = {
	route1_kanto: {
		id: 'route1_kanto',
		name: 'Route 1 (Kanto)',
		gen: 1,
		region: 'Kanto',
		preview: ['pidgey', 'rattata', 'oddish', 'mankey'],
		species: ['pidgey', 'rattata', 'caterpie', 'weedle', 'spearow', 'nidoranf', 'nidoranm', 'oddish', 'bellsprout', 'mankey', 'poliwag', 'abra', 'meowth', 'psyduck', 'geodude', 'zubat'],
	},
	route29_johto: {
		id: 'route29_johto',
		name: 'Route 29 (Johto)',
		gen: 2,
		region: 'Johto',
		preview: ['sentret', 'hoothoot', 'mareep', 'wooper'],
		species: ['sentret', 'hoothoot', 'ledyba', 'spinarak', 'mareep', 'wooper', 'marill', 'pineco', 'snubbull', 'teddiursa', 'phanpy', 'hoppip', 'aipom', 'yanma', 'swinub', 'houndour'],
	},
	route101_hoenn: {
		id: 'route101_hoenn',
		name: 'Route 101 (Hoenn)',
		gen: 3,
		region: 'Hoenn',
		preview: ['zigzagoon', 'taillow', 'ralts', 'shroomish'],
		species: ['zigzagoon', 'wurmple', 'poochyena', 'taillow', 'wingull', 'lotad', 'seedot', 'ralts', 'shroomish', 'slakoth', 'electrike', 'skitty', 'whismur', 'aron', 'makuhita'],
	},
	route201_sinnoh: {
		id: 'route201_sinnoh',
		name: 'Route 201 (Sinnoh)',
		gen: 4,
		region: 'Sinnoh',
		preview: ['starly', 'bidoof', 'shinx', 'buizel'],
		species: ['starly', 'bidoof', 'kricketot', 'shinx', 'budew', 'buizel', 'pachirisu', 'buneary', 'shellos', 'drifloon', 'stunky', 'skorupi', 'croagunk', 'hippopotas'],
	},
	route1_unova: {
		id: 'route1_unova',
		name: 'Route 1 (Unova)',
		gen: 5,
		region: 'Unova',
		preview: ['patrat', 'lillipup', 'purrloin', 'blitzle'],
		species: ['patrat', 'lillipup', 'purrloin', 'pidove', 'blitzle', 'roggenrola', 'tympole', 'sewaddle', 'venipede', 'cottonee', 'petilil', 'sandile', 'scraggy', 'zorua', 'minccino'],
	},
	route2_kalos: {
		id: 'route2_kalos',
		name: 'Route 2 (Kalos)',
		gen: 6,
		region: 'Kalos',
		preview: ['fletchling', 'bunnelby', 'pancham', 'espurr'],
		species: ['bunnelby', 'fletchling', 'scatterbug', 'litleo', 'flabebe', 'skiddo', 'pancham', 'espurr', 'honedge', 'helioptile', 'inkay', 'phantump', 'dedenne', 'goomy'],
	},
	route1_alola: {
		id: 'route1_alola',
		name: 'Route 1 (Alola)',
		gen: 7,
		region: 'Alola',
		preview: ['pikipek', 'yungoos', 'grubbin', 'rockruff'],
		species: ['pikipek', 'yungoos', 'grubbin', 'cutiefly', 'rockruff', 'mareanie', 'mudbray', 'dewpider', 'fomantis', 'stufful', 'bounsweet', 'wimpod', 'salandit', 'mimikyu'],
	},
	route1_galar: {
		id: 'route1_galar',
		name: 'Route 1 (Galar)',
		gen: 8,
		region: 'Galar',
		preview: ['rookidee', 'skwovet', 'wooloo', 'yamper'],
		species: ['skwovet', 'rookidee', 'blipbug', 'nickit', 'wooloo', 'chewtle', 'yamper', 'rolycoly', 'applin', 'silicobra', 'arrokuda', 'toxel', 'hatenna', 'impidimp'],
	},
	pocopath_paldea: {
		id: 'pocopath_paldea',
		name: 'Poco Path (Paldea)',
		gen: 9,
		region: 'Paldea',
		preview: ['lechonk', 'pawmi', 'fidough', 'charcadet'],
		species: ['lechonk', 'tarountula', 'nymble', 'pawmi', 'smoliv', 'fidough', 'tandemaus', 'nacli', 'charcadet', 'tadbulb', 'wattrel', 'maschiff', 'shroodle', 'tinkatink', 'finizen'],
	},
	safari_all: {
		id: 'safari_all',
		name: 'Safari Zone (All Gens)',
		gen: 0,
		region: 'National',
		preview: ['eevee', 'dratini', 'gible', 'dreepy'],
		species: [
			'pikachu', 'eevee', 'dratini', 'snorlax',
			'larvitar', 'heracross', 'marill', 'togepi',
			'bagon', 'beldum', 'ralts', 'feebas',
			'gible', 'riolu', 'lucario', 'rotom',
			'zorua', 'axew', 'deino', 'litwick',
			'froakie', 'hawlucha', 'honedge', 'noibat',
			'mimikyu', 'rockruff', 'jangmoo', 'mareanie',
			'dreepy', 'rookidee', 'snom', 'morpeko',
			'charcadet', 'tinkatink', 'frigibax', 'glimmet',
		],
	},
};

export function getLocation(locStr: string): SGLocation {
	if (!locStr) return SG_LOCATIONS.route1_kanto;
	if (SG_LOCATIONS[locStr]) return SG_LOCATIONS[locStr];
	for (const loc of Object.values(SG_LOCATIONS)) {
		if (loc.name.toLowerCase() === locStr.toLowerCase() || loc.id.toLowerCase() === locStr.toLowerCase()) {
			return loc;
		}
	}
	return SG_LOCATIONS.route1_kanto;
}
