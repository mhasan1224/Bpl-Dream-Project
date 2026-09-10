
import { use } from 'react';
import type { Iplayer } from '../../Type/PlayerType';



export interface PlayersProps {
    PlayersPromise: Promise<Iplayer[]>;
}

export default function Players({ PlayersPromise }: PlayersProps) {
    const Players = use(PlayersPromise);
    
    return (
        <>
        </>
    )
};