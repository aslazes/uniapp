import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Consultation from '../views/Consultation/Consultation.vue'
import Navigation from '../views/Navigation.vue'
import Sales from '../views/Sales/Sales.vue'
import QA from '../views/QA.vue'
import Exams from '../views/Consultation/Exams.vue'
import Olymp from '../views/Consultation/Olymp.vue'
import Special from '../views/Consultation/Special.vue'
import Spo from '../views/Consultation/Spo.vue'
import Quota from '../views/Consultation/Quota.vue'
import MathRusIT from '../views/Consultation/subjects/MathRusIT.vue'
import MathRusSocForg from '../views/Consultation/subjects/MathRusSocForg.vue'
import MathRusSoc from '../views/Consultation/subjects/MathRusSoc.vue'
import RusSocForg from '../views/Consultation/subjects/RusSocForg.vue'
import RusSocHis from '../views/Consultation/subjects/RusSocHis.vue'
import MathRusChem from '../views/Consultation/subjects/MathRusChem.vue'
import MathRusPhys from '../views/Consultation/subjects/MathRusPhys.vue'
import MathRusBio from '../views/Consultation/subjects/MathRusBio.vue'
import RusLitr from '../views/Consultation/subjects/RusLitr.vue'
import Error from '../views/Consultation/subjects/Error.vue'
import Ecchos from '../views/Consultation/subjects/Ecchos.vue'
import Mnchos from '../views/Consultation/subjects/Mnchos.vue'
import Gmuchos from '../views/Consultation/subjects/Gmuchos.vue'
import Imisice from '../views/Consultation/faculties/Imisice.vue'
import Fep from '../views/Consultation/faculties/Fep.vue'
import Ibs from '../views/Consultation/faculties/Ibs.vue'
import Ff from '../views/Consultation/faculties/Ff.vue'
import Fm from '../views/Consultation/faculties/Fm.vue'
import Fma from '../views/Consultation/faculties/Fma.vue'
import Grtsi from '../views/Consultation/faculties/Grtsi.vue'
import Fbc from '../views/Consultation/faculties/Fbc.vue'
import Fett from '../views/Consultation/faculties/Fett.vue'
import Fdo from '../views/Consultation/faculties/Fdo.vue'
import SaleSchool from '../views/Sales/SaleSchool.vue'
import SaleSPO from '../views/Sales/SaleSPO.vue'
import Extrapoints from '../views/Extrapoints.vue'
import Dates from '../views/Dates.vue'
import Minimum from '../views/Minimum.vue'
import Docs from '../views/Docs.vue'
import ConsulOlymp from '../views/Consultation/Olymp/ConsulOlymp.vue'
import DocsOlymp from '../views/Consultation/Olymp/DocsOlymp.vue'
import Prem from '../views/Consultation/Olymp/Prem.vue'
import Budg from '../views/Consultation/Spo/Budg.vue'
import Vnebudg from '../views/Consultation/Spo/Vnebudg.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/consultation',
    name: 'Consultation',
    component: Consultation,
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: Navigation,
  },
  {
    path: '/Sales',
    name: 'Sales',
    component: Sales,
  },
  {
    path: '/qa',
    name: 'QA',
    component: QA,
  },
  {
    path: '/exams',
    name: 'Exams',
    component: Exams,
  },
  {
    path: '/olymp',
    name: 'Olymp',
    component: Olymp,
  },

  {
    path: '/special',
    name: 'Special',
    component: Special,
  },

  {
    path: '/spo',
    name: 'Spo',
    component: Spo,
  },
  {
    path: '/quota',
    name: 'Quota',
    component: Quota,
  },
  {
    path: '/exams/MathRusIT',
    name: 'MathRusIT',
    component: MathRusIT,
  },
  {
    path: '/exams/MathRusSocForg',
    name: 'MathRusSocForg',
    component: MathRusSocForg,
  },

  {
    path: '/exams/MathRusSoc',
    name: 'MathRusSoc',
    component: MathRusSoc,
  },
  {
    path: '/exams/RusSocForg',
    name: 'RusSocForg',
    component: RusSocForg,
  },
  {
    path: '/exams/RusSocHis',
    name: 'RusSocHis',
    component: RusSocHis,
  },
  {
    path: '/exams/MathRusChem',
    name: 'MathRusChem',
    component: MathRusChem,
  },
  {
    path: '/exams/MathRusPhys',
    name: 'MathRusPhys',
    component: MathRusPhys,
  },
  {
    path: '/exams/MathRusBio',
    name: 'MathRusBio',
    component: MathRusBio,
  },
  {
    path: '/exams/RusLitr',
    name: 'RusLitr',
    component: RusLitr,
  },
  {
    path: '/exams/Error',
    name: 'Error',
    component: Error,
  },

  {
    path: '/exams/Error',
    name: 'Error',
    component: Error,
  },
  {
    path: '/exams/faculties/imisice',
    name: 'Imisice',
    component: Imisice,
  },
  {
    path: '/exams/ecnm_choose',
    name: 'Ecchos',
    component: Ecchos,
  },
  {
    path: '/exams/gmu_choose',
    name: 'Gmuchos',
    component: Gmuchos,
  },
  {
    path: '/exams/faculties/fep',
    name: 'Fep',
    component: Fep,
  },
  {
    path: '/exams/faculties/ibs',
    name: 'Ibs',
    component: Ibs,
  },
  {
    path: '/exams/faculties/ff',
    name: 'Ff',
    component: Ff,
  },
  {
    path: '/exams/faculties/fm',
    name: 'Fm',
    component: Fm,
  },
  {
    path: '/exams/faculties/fma',
    name: 'Fma',
    component: Fma,
  },
  {
    path: '/exams/faculties/grtsi',
    name: 'Grtsi',
    component: Grtsi,
  },
  {
    path: '/exams/faculties/fdo',
    name: 'Fdo',
    component: Fdo,
  },
  {
    path: '/exams/faculties/fbc',
    name: 'Fbc',
    component: Fbc,
  },
  {
    path: '/exams/faculties/fett',
    name: 'Fett',
    component: Fett,
  },
  {
    path: '/exams/mn_choose',
    name: 'Mnchos',
    component: Mnchos,
  },
  {
    path: '/sales/salesschool',
    name: 'SaleSchool',
    component: SaleSchool,
  },
  {
    path: '/sales/salesspo',
    name: 'SaleSPO',
    component: SaleSPO,
  },
  {
    path: '/extrapoints',
    name: 'Extrapoints',
    component: Extrapoints,
  },
  {
    path: '/dates',
    name: 'Dates',
    component: Dates,
  },
  {
    path: '/minimum',
    name: 'Minimum',
    component: Minimum,
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
  },
  {
    path: '/olymp/consulolymp',
    name: 'ConsulOlymp',
    component: ConsulOlymp,
  },
  {
    path: '/olymp/docsolymp',
    name: 'DocsOlymp',
    component: DocsOlymp,
  },
  {
    path: '/olymp/premolymp',
    name: 'Prem',
    component: Prem,
  },

  {
    path: '/consultation/spo/budg',
    name: 'Budg',
    component: Budg,
  },

  {
    path: '/consultation/spo/vnebudg',
    name: 'Vnebudg',
    component: Vnebudg,
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
