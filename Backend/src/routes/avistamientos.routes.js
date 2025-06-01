import Router from 'express'
import {  actualizarAvistamientos,   buscarAvistamientos,  listarAvistamientos,  registrarAvistamientos} from '../controller/avistamientos.controller.js'
import { validarToken } from '../controller/seguridad.js'

const rutaAves = Router()

rutaAves.get('/listar', validarToken,  listarAvistamientos)
rutaAves.post('/registrar', validarToken,  registrarAvistamientos)
rutaAves.put('/registrar', validarToken,  actualizarAvistamientos)
rutaAves.get('/registrar', validarToken,  buscarAvistamientos)

export default rutaAves