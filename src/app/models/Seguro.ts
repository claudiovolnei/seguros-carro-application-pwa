import { MarcaCarro} from './MarcaCarro';

export interface Seguro {
    marcaCarro: MarcaCarro;
    modeloCarro: string;
    placaCarro: string;
    nomeProprietario: string;
    sobrenome: string;
    dataNascimentoProprietario: string;
}