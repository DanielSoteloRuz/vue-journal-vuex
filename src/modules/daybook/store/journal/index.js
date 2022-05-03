/* 
  EXPLICACION:
  Es donde se recoge todo y lo que se importa 
 */

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

const journalModule = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default journalModule




