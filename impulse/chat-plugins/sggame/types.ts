export interface SGPokemon {
	species: string;
	level: number;
	exp: number;
	hp: number;
	maxHp: number; // For easy reference, though it can be recalculated
	status: string;
	moves: string[];
	item?: string;
	gender?: 'M' | 'F' | 'N';
	shiny?: boolean;
}

export interface SGPlayer {
	userid: string;
	party: SGPokemon[];
	pc: SGPokemon[];
	bag: Record<string, number>;
	location: string;
	introState: number;
	money?: number;
	pendingEvolutions?: { partyIndex: number, evoSpecies: string }[];
	pendingMoves?: { partyIndex: number, move: string }[];
	lastMessage?: string;
	lastScreen?: string;
	lastContext?: any;
}
