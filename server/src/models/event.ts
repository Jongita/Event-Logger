import { RowDataPacket } from "mysql2";

export interface Event extends RowDataPacket{
    id?:number;
    timestamp:Date;
    message:string;
    user_id:number;
    transaction_id:number;
    type:string;
}