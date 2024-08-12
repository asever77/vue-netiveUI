import { createStore } from 'vuex';
import { Layer } from '@/store/modules/Layer'
import { PageInfo } from '@/store/modules/PageInfo'

export default createStore({
  modules: { Layer, PageInfo },
});
