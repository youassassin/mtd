export class Skill {
    name: string;
    description: string;
    lvl: string;
    hp: string;
    mp: string;
    atk: string;
    def: string;
    agl: string;
    int: string;
    upgrade?: string[];
    combine?: string[][];

    constructor() {
        this.name = "";
        this.description = "";
        this.lvl = "";
        this.hp = "";
        this.mp = "";
        this.atk = "";
        this.def = "";
        this.agl = "";
        this.int = "";
        this.upgrade = [];
        this.combine = [[]];
    }
}