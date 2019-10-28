import HelloWorld from './components/HelloWorld.vue'
import ExampleClick from './components/ExampleClick.vue'
import ExampleTable from './components/ExampleTable.vue'

export const routes = [
  { path: '/', component: HelloWorld },
  { path: '/welcome', component: HelloWorld },
  { path: '/exampleclick', component: ExampleClick },
  { path: '/exampletable', component: ExampleTable }
]