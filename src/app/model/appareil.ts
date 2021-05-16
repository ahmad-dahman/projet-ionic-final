export class Appareil {
    id:number;
    name:string;
    description:String[];
    isOn:boolean;
    startTime: string;
    endTime: string;

    constructor(name:string,description:String[]){
        this.name = name;
        this.description = description;
        this.isOn = false;
        this.startTime = "";
        this.endTime = "";
    }


}
