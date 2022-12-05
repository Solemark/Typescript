import { app } from './firebase'
import firebase from 'firebase/compat'
import { useContext, useState, useEffect, createContext } from 'react'

interface Iuser {
    currentUser: firebase.User
}

const AuthContext = createContext<string | null>(null)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<any>()
    const [loading, setLoading] = useState(true)

    let user: Iuser = {
        currentUser: currentUser
    }

    const register = (email: string, password: string) => {
        return app.auth().createUserWithEmailAndPassword(email, password)
    }
    const login = (email: string, password: string) => {
        return app.auth().signInWithEmailAndPassword(email, password)
    }
    const logout = () => {
        return app.auth().signOut()
    }
    const resetPassword = (email: string) => {
        return app.auth().sendPasswordResetEmail(email)
    }
    const updateName = (name: string) => {
        return user.currentUser.updateProfile({ displayName: name })
    }
    const updateEmail = (email: string) => {
        return user.currentUser.updateEmail(email)
    }
    const updatePassword = (password: string) => {
        return user.currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value: any = { currentUser, register, login, logout, resetPassword, updateName, updateEmail, updatePassword }
    return (
        <>
            <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
        </>
    )
}
