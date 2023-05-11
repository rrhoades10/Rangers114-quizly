const axios = require('axios')

module.exports = async (req, res) => {
    //form validation
    if (!req.body.email || !req.body.password || (req.body.password !== req.body.confirmPassword)) {
        res.redirect('/auth/register')
        return
    }

    const mutation = `
    mutation register($email: String!, $password: String!, $username: String!) { 
        register( email: $email, password: $password, username: $username ) 
    }`

    try {
        const response = await axios.post('http://localhost:3000/graphql',
            {
                query: mutation,
                variables: {
                    email: req.body.email,
                    password: req.body.password,
                    username: req.body.username
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        console.log(response.data.data.register, 'booooo')
        console.log('before cookie')
        res.cookie('JWT', response.data.data.register, { maxAge: 900000, httpOnly: true })
        console.log('after cookie')
        res.redirect('/')
    }
    catch (err) {
        console.log(err)
        res.redirect('/auth/login')
    }

}