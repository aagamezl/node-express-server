const users = [
  {
    id: 1,
    first_name: 'Elton',
    last_name: 'Avard',
    email: 'eavard0@themeforest.net',
    gender: 'Male'
  },
  {
    id: 2,
    first_name: 'Vera',
    last_name: 'Khomich',
    email: 'vkhomich1@smh.com.au',
    gender: 'Female'
  }
]

export const deleteById = (req, res) => {

}

export const getAll = (req, res) => {
  res.json(users)
}

export const getById = (req, res) => {

}

export const create = (req, res) => {
  const user = {
    id: users.length + 1,
    ...req.body
  }

  users.push(user)

  res.status(201).json(user)
}

export const update = (req, res) => {

}