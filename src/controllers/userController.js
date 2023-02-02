import userService from '../services/userService.js'
export default {
  createUser: async (req, res) => {
    try {
      const data = await userService.createUser(req.body)
      return res.status(201).json(data)
    } catch (error) {
      res.status(400).json({ message: 'error' })
    }
  },
  getUser: async (req, res) => {
    try {
      const data = await userService.fetchUser(req.params.id)
      return res.json(data)
    } catch (error) {
      res.status(400).json({ message: 'error' })
    }
  }

}
