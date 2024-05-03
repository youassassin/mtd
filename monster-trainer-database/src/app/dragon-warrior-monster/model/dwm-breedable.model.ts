export class Breedable {
    id: string = '';
    name: string = '';
    parents: { pedigree: string[], parent: string[] }[] = []
    children: string[] = []
}