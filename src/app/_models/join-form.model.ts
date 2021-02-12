export class JoinForm {
    name: string;
    area: string;
    email: string;
    phone: string;
    cpo: boolean;

    constructor(name: string, area: string, em: string, ph: string, isCpo: boolean) {
        this.name = name;
        this.area = area;
        this.email = em;
        this.phone = ph;
        this.cpo = isCpo;
    }
}