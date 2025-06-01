import { pool } from "../database/conexion.js";

export const listarAves = async (req, res) => {
    try {
        const sql = `SELECT * FROM aves`;
        const [result] = await pool.query(sql);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'No hay aves registradas' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor' + error });
    }
};


export const registrarAves = async (req, res) => {
    try {
        const { nombre_comun, nombre_cientifico, familia, descripcion, habitat, imagen } = req.body

        let sql = `INSERT INTO aves (nombre_comun, nombre_cientifico, familia, descripcion, habitat, imagen) VALUES (?, ?, ?, ?, ?, ?)`

        const [rows] = await pool.query(sql, [nombre_amb, municipio, sede])

        if (rows.affectedRows > 0) {
            res.status(200).json({
                message: 'Ave registrada correctamente'
            })
        } else {
            res.status(403).json({
                message: 'Error al registrar el ave'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error del servidor' + error
        })
    }
}

export const actualizarAves = async (req, res) => {
    try {
        const { id_ave } = req.params
        const { nombre_comun, nombre_cientifico, familia, descripcion, habitat, imagen  } = req.body

        let sql = `UPDATE aves SET
                    nombre_comun = ?,
                    nombre_cientifico =?,
                    familia =?,
                    descripcion =?,
                    habitat =?,
                    imagen =?,
                    
                    WHERE id_ave = ?`

        const [rows] = await pool.query(sql, [nombre_comun, nombre_cientifico, familia, descripcion, habitat, imagen, id_ave])

        if (rows.affectedRows > 0) {
            res.status(200).json({
                message: 'Ave actualizada correctamente'
            })
        } else {
            res.status(403).json({
                message: 'Error al actualizar el ave'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error del servidor' + error
        })
    }
}


export const buscarAve = async (req, res) => {
    try {
        const {id_ave} = req.params
        let sql = `SELECT * FROM aves WHERE id_ave =?`

        const [result] = await pool.query(sql, [id_ave])

        if(result.length>0){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                message: 'Ave no encontrada'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error en el servidor' + error
        })
    }
}


