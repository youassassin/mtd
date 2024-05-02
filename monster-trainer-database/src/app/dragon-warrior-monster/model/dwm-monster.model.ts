export class Monster {
    id: string;
    image: string;
    name: string;
    family: string;
    maxLevel: string;
    xpGrowth: string;
    sexChance: string;
    isFlying: string;
    isMetal: string;
    hpGrowth: string;
    mpGrowth: string;
    atkGrowth: string;
    defGrowth: string;
    agiGrowth: string;
    intGrowth: string;
    skills: string[];
    constructor() {
        this.id = "";
        this.image = "";
        this.name = "";
        this.family = "";
        this.maxLevel = "";
        this.xpGrowth = "";
        this.sexChance = "";
        this.isFlying = "";
        this.isMetal = "";
        this.hpGrowth = "";
        this.mpGrowth = "";
        this.atkGrowth = "";
        this.defGrowth = "";
        this.agiGrowth = "";
        this.intGrowth = "";
        this.skills = [];
    }
}