import { createStore } from 'vuex';
import { Layer } from '@/store/modules/Layer'
import { Checkup } from '@/store/modules/checkup'

export default createStore({
  modules: { Layer, Checkup },
});
