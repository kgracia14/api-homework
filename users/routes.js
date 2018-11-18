const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')
const router = new Router()

router.post('/users', (req, res, next) => {
    
    const user = {
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 10),
		password_confirmation: bcrypt.hashSync(req.body.password_confirmation, 10)
    }
     
	User
		.create(user)
		.then(individual => {
			if (req.body.password !== req.body.password_confirmation) {
				return res.status(400).send({
					message: `Sorry, please provide matching passwords.`
				})
			}
			res.send({
				id: individual.id,
				email: individual.email
			})
        })
        
		.catch(err => {
			console.error(err)
			res.status(500).send({
				message: 'Sorry, please provide a valid email, with matching passwords.'
			})
		})
})

module.exports = router