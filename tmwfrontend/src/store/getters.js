export const user = state => {
  return {name: 'Lys'}
}

export const hasBoards = state => {
  return true
}

export const personalBoards = state => {
  return [{
    id: 1,
    name: 'task management',
    description: 'focus more'
  }]
}

export const teamBoards = state => {
  return [{
    id: 1,
    name: 'Sales & Marketing',
    boards: [{
      id: 2,
      name: '2018 Planning',
      description: '2018 sales & marketing planning'
    }, {
      id: 3, name: 'Ongoing Campaigns', description: '2018 ongoing marketing campaigns'
    }]
  }]
}
