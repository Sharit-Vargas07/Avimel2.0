import Router from 'express'
import { actualizarAves, buscarAve, listarAves, registrarAves} from '../controller/aves.controller.js'
import { validarToken } from '../controller/seguridad.js'

const rutaAves = Router()

rutaAves.get('/listar', validarToken,  listarAves)
rutaAves.post('/registrar', validarToken,  registrarAves)
rutaAves.put('/registrar', validarToken,  actualizarAves)
rutaAves.get('/registrar', validarToken,  buscarAve)

export default rutaAves