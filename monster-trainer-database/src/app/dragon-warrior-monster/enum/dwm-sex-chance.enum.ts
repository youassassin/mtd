export enum SexChance {
    MALE_ONLY,
    MALE,
    EQUAL,
    FEMALE
}

export function convertEnumPercentage(sc: SexChance): { boy: string, girl: string } {
    let boy = '100%';
    let girl = '0%';
    switch (sc) {
        case SexChance.MALE:
            boy = '83.3%';
            girl = '16.7%';
            break;
        case SexChance.EQUAL:
            boy = '50%';
            girl = '50%';
            break;
        case SexChance.FEMALE:
            boy = '10%';
            girl = '90%';
            break;
    }
    return { boy: boy, girl: girl };
}