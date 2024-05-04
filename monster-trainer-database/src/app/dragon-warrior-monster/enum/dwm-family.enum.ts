export enum Family {
    SLIME,
    DRAGON,
    BEAST,
    BIRD,
    PLANT,
    BUG,
    DEVIL,
    ZOMBIE,
    MATERIAL,
    BOSS
}

export function convertEnumToImagePath(f: Family): string {
    return `/assets/images/dragon-warrior-monster/${Family[f].toLowerCase()}-family.png`;
}