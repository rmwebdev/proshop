
import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin User',
        email:'email@example.com',
        password:bcrypt.hashSync('password', 12),
        isAdmin:true,
    },
    {
        name:'Alfarazi',
        email:'alfarazi@example.com',
        password:bcrypt.hashSync('password', 12),
    },
    {
        name:'Alberto',
        email:'beto@example.com',
        password:bcrypt.hashSync('password', 12),
    }
]

export default users