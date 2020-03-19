import meService from '@/services/me'

export const getMydata = ({commit}) => {
  meService.getMydata().then(data=> {
    commit('updateMyData', data)
  })
}

export const addTeam = ({commit}, team) => {
  commit('addTeam', team)
}

export const addBoards=({commit},board) =>{
  commit('addBoard', board)
}
