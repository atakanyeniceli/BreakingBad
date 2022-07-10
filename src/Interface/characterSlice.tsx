import { ICharacter } from "./character";



export interface ICharacterSlice {
    information: Array<ICharacter>,
    limit: boolean,
    offset: number,
}