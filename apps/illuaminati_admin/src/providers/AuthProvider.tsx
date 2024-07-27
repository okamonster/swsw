import { useRouter } from 'next/router'
import type { User } from 'firebase/auth'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { auth } from '~/libs/firebase'

const AuthContext = createContext<{
  uid: string | null
  currentUser: User | null | undefined
  isLogin: boolean
  logout: (isAdmin?: boolean) => Promise<void>
}>({
  uid: null,
  currentUser: null,
  isLogin: false,
  logout: async () => {},
})

const nonAuthPaths = ['/login', '/signup', '/swsw', '/dev', '/user']

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { pathname, push } = useRouter()
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(null)
  const [uid, setUid] = useState<string | null>(null)

  const isLogin = useMemo(() => !!currentUser, [currentUser])

  const isAuthPath = useCallback((path: string) => {
    return !nonAuthPaths.some((nonAuthPath) => path.startsWith(nonAuthPath))
  }, [])

  const logout = async () => {
    await signOut(auth)
    setCurrentUser(null)
    setUid(null)

    push('/')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!isAuthPath(pathname)) {
        return
      }

      if (!user) {
        setCurrentUser(null)
        setUid(null)
        push('/')
        return
      }

      setCurrentUser(user)
      setUid(user.uid)

      return () => {
        unsubscribe()
      }
    })
  }, [isAuthPath, pathname, push])

  return (
    <AuthContext.Provider
      value={{
        uid,
        currentUser,
        isLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

export const useAuthContext = () => useContext(AuthContext)
