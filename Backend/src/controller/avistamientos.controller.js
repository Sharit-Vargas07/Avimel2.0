import { pool } from "../database/conexion.js";

export const listarAvistamientos = async (req, res) => {
    try {
        const sql = `SELECT * FROM avistamientos`;
        const [result] = await pool.query(sql);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'No hay avistamientos registrados' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor' + error });
    }
};


export const registrarAvistamientos = async (req, res) => {
    try {
        const { fk_ruta, fk_ave, fecha, hora, comentario } = req.body

        let sql = `INSERT INTO avistamientos (fk_ruta, fk_ave, fecha, hora, comentario) VALUES (?, ?, ?, ?, ?)`

        const [rows] = await pool.query(sql, [fk_ruta, fk_ave, fecha, hora, comentario])

        if (rows.affectedRows > 0) {
            res.status(200).json({
                message: 'Avistamiento registrado correctamente'
            })
        } else {
            res.status(403).json({
                message: 'Error al registrar el avistamiento'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error del servidor' + error
        })
    }
}

export const actualizarAvistamientos = async (req, res) => {
    try {
        const { id_avistamiento } = req.params
        const { fk_ruta, fk_ave, fecha, hora, comentario  } = req.body

        let sql = `UPDATE avistamientos SET
                    fk_ruta =?,
                    fk_ave =?,
                    fecha =?,
                    hora =?,
                    comentario =?,
                    
                    WHERE id_avistamiento = ?`

        const [rows] = await pool.query(sql, [fk_ruta, fk_ave, fecha, hora, comentario, id_avistamiento])

        if (rows.affectedRows > 0) {
            res.status(200).json({
                message: 'Avistamiento actualizado correctamente'
            })
        } else {
            res.status(403).json({
                message: 'Error al actualizar el avistamiento'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error del servidor' + error
        })
    }
}


export const buscarAvistamientos = async (req, res) => {
    try {
        const {id_avistamiento} = req.params
        let sql = `SELECT * FROM avistamientos WHERE id_avistamiento =?`

        const [result] = await pool.query(sql, [id_avistamiento])

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

export const eliminarAvistamiento = async (req, res) => {
    try {
        const { id_avistamiento } = req.params

        let sql = `DELETE FROM avistamientos WHERE id_avistamiento = ?`

        const [rows] = await pool.query(sql, [id_avistamiento])

        if (rows.affectedRows > 0) {
            res.status(200).json({
                message: 'Avistamiento eliminado exitosamente'
            })
        } else {
            res.status(403).json({
                message: 'Error al eliminar el avistamiento'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error del servidor' + error
        })
    }
}


