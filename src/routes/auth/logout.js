module.exports = (req, res) => {
    res.cookie('JWT', '', { maxAge: 90000, httpOnly: true })
    res.redirect('/auth/login')
}