import express from 'express'
import body_parser from 'body-parser'
import cors from 'cors'
import rutaAves from './src/routes/aves.routes.js'

const servidor = express()

servidor.use(cors())

servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({ extended: false }))
servidor.use('/public', express.static('public'));

servidor.use('/aves', rutaAves)


servidor.use(express.static('./public'))
servidor.set('view engine', 'ejs')

servidor.get('/document', (req,res) => {
    res.render('document.ejs')
})

servidor.listen(3000, () => {
    console.log('Servidor funcionando en el puerto 3000');
})