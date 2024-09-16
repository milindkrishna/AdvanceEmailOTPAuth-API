import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '12h'
    })
    res.cookie('token', token, {
        httpOnly: true, // cookie cannot be accessed by client side to prevent xss attack
        sameSite: 'strict', // to prevent csrf attack
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days validity
    })
    return token
}