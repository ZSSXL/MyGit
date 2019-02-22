import workCharts from './components/workCharts.vue'
import workForms from './components/workForms.vue'
import workTables from './components/workTables.vue'

export default[
	{path:"/",component:workTables},
	{path:"/forms",component:workForms},
	{path:"/charts",component:workCharts}
]