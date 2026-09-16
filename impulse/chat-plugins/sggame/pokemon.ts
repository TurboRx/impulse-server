import { type SGPokemon } from './types';
import { expForLevel, getExpType, applyExpAndLevelUp } from '../../utils/exp';
import { getMovesLearnedBetween, getAllLevelUpMoves } from '../../utils/moves';

export const SGUtils = {
	generateWild(species: string, level: number): SGPokemon {
		const dexSp = Dex.species.get(species);

		const baseHp = dexSp.baseStats.hp;
		const maxHp = Math.floor((2 * baseHp * level) / 100) + level + 10;

		let moves = getMovesLearnedBetween(dexSp.id, 0, level, false, 9).slice(-4);
		if (!moves.length) {
			// Fallback: check all level up moves
			moves = getAllLevelUpMoves(dexSp.id, level, 9).slice(-4);
		}
		if (!moves.length) moves = ['tackle'];

		let gender: 'M' | 'F' | 'N' = 'N';
		if (dexSp.gender) {
			gender = dexSp.gender;
		} else if (dexSp.genderRatio) {
			gender = Math.random() < dexSp.genderRatio.M ? 'M' : 'F';
		}

		// 1% chance of shiny
		const shiny = Math.random() < 0.01;

		return {
			species: dexSp.id,
			level,
			exp: expForLevel(level, getExpType(dexSp.id)),
			hp: maxHp,
			maxHp,
			status: '',
			moves,
			gender,
			shiny,
		};
	},

	heal(pokemon: SGPokemon) {
		pokemon.hp = pokemon.maxHp;
		pokemon.status = '';
	},

	giveExp(pokemon: SGPokemon, expGained: number, pendingMovesOut?: string[]): string[] {
		const messages: string[] = [];
		const dexSp = Dex.species.get(pokemon.species);
		const expType = getExpType(dexSp.id);

		messages.push(`${dexSp.name} gained ${expGained} EXP!`);

		const { leveledUp, newLevel, newExp } = applyExpAndLevelUp(pokemon.level, pokemon.exp, expGained, expType, 100);

		pokemon.exp = newExp;
		if (leveledUp) {
			messages.push(`${dexSp.name} grew to level ${newLevel}!`);

			const newMoves = getMovesLearnedBetween(dexSp.id, pokemon.level, newLevel);
			pokemon.level = newLevel;

			const baseHp = dexSp.baseStats.hp;
			const newMaxHp = Math.floor((2 * baseHp * newLevel) / 100) + newLevel + 10;
			const diff = newMaxHp - pokemon.maxHp;
			pokemon.maxHp = newMaxHp;
			if (pokemon.hp > 0) pokemon.hp += diff;

			for (const move of newMoves) {
				if (!pokemon.moves.includes(move)) {
					if (pokemon.moves.length < 4) {
						pokemon.moves.push(move);
						messages.push(`${dexSp.name} learned ${Dex.moves.get(move).name}!`);
					} else {
						if (pendingMovesOut) {
							pendingMovesOut.push(move);
						} else {
							const oldMove = pokemon.moves.shift();
							pokemon.moves.push(move);
							messages.push(`${dexSp.name} forgot ${Dex.moves.get(oldMove).name} and learned ${Dex.moves.get(move).name}!`);
						}
					}
				}
			}
		}

		return messages;
	},
};
