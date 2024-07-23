
export class Event {

    constructor(

    public timestamp:Date,
    public message:string,
    public user_id:number,
    public transaction_id:number,
    public type:string,
    public id?:number
    ){}
   
}