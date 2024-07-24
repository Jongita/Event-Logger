import { pool } from "../db/connect";
import { Event } from "../models/event";

export class LoggerController{
        static async getAll( req:any, res:any){
        // const sql="SELECT * FROM event";
        const sql="SELECT e.id, DATE_FORMAT(e.timestamp, '%Y-%m-%d %H:%i:%s') AS timestamp, e.message, e.user_id, e.transaction_id, e.type FROM event e;";
        const [result]=await pool.query<Event[]>(sql);
        res.json(result);
    }

       static async getEvent( req:any, res:any){
        console.log(req.params.id);
        const sql="SELECT * FROM event WHERE id=?";
        const [result]=await pool.query<Event[]>(sql, [req.params.id]);
        if (result.length==0){
            res.status(404).json({
                'text': 'Pateiktas irasas nerastas'
            })
        } else{
            res.json(result[0]);
        }
    }
    
        static async insert(req:any, res:any){
        const sql="INSERT INTO event (timestamp, type, message, user_id, transaction_id) VALUES ( ?, ?, ?, ?, ?)";
        await pool.query(sql, [req.body.timestamp, req.body.type, req.body.message, req.body.user_id, req.body.transaction_id]);
        res.status(201).json({
            "success":true
        })
    }

        static async update(req:any, res:any){
        const sql="UPDATE event SET timestamp=?, type=?, message=?, user_id=?, transaction_id=? WHERE id=?";
        await pool.query(sql, [req.body.timestamp, req.body.type, req.body.message, req.body.user_id, req.body.transaction_id, req.body.id]);
        res.json({
            "success":true
        })
    }
        static async delete(req:any, res:any){
        const sql="DELETE FROM event WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
       
    }
