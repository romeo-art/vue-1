import ROUTER from 'router'
export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        this.user = user
    },
    register(email, password) {
        this.registeredUser.push({
        email : email,
        password : password
        })
        ROUTER.push("/login");
    },
    login(email,password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].email === email && this.registeredUser[i].password === password) {
                ROUTER.push('/dashboard')
                return this.registeredUser[i]
                
            }
            
          
        }
        return null
    },
    logout() {
        this.user = null
        ROUTER.push('/login')
    }

}