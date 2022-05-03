/* 
  EXPLICACION:
  Es donde se crea el store y se importa los modulos
 */

import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'

const store = createStore({
  modules: {
    journal
  }
})

export default store