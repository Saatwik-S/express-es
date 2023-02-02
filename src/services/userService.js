const user = []
let currentUserID = 1
export default {
  createUser: async (userInfo) => {
    user.push({ ...userInfo, id: currentUserID++ })
    return user[user.length - 1]
  },
  fetchUser: async (id) => {
    if (!id) return user

    const userFound = user.find(user => user.id === id)
    if (!userFound) return null
    return userFound
  }

}
