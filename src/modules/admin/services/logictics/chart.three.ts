import { computed, ref } from "vue";
import { get } from "@/core/services/helpers/request.helper";

type CurrentOutput = {
  series: number[];
  labels: string[];
};

const init_state: CurrentOutput = {
  series: [],
  labels: [],
};

export const state = ref<CurrentOutput>({ ...init_state });
export const timeperiod = ref('currentday');

export const categories = [
  'lastday', 'currentday', 'lastweek', 'currentweek', 
  'lastmonth', 'currentmonth', 'lastquarter', 'currentquarter', 
  'lastyear', 'currentyear', 'all'
];

const endpoints = [
  { url: '/api/invoices/count', label: 'Invoices' },
  { url: '/api/blogs/count', label: 'Blogs' },
  { url: '/api/schedules/count', label: 'Schedules' },
  { url: '/api/healthrecords/count', label: 'Health Records' },
  { url: '/api/prescriptions/count', label: 'Prescriptions' },
  { url: '/api/services/count', label: 'Services' },
];

export const total = computed(()=>state.value.series.reduce((total,num)=>total+=num,0))
function resetObject(target: any, source: any) {
    Object.keys(target).forEach(key => {
      delete target[key];
    });
    Object.assign(target, source);
  }
  
export const fetch = async () => {
  resetObject(state.value, init_state);
  const requests = endpoints.map(endpoint => 
    get<number>(endpoint.url, { timeperiod: timeperiod.value }).then(response => {
      if (response?.data) {
        state.value.series.push(response.data);
        state.value.labels.push(endpoint.label);
      }
    })
  );

  await Promise.all(requests);
};

export const apexOptions = {
  chart: {
    type: 'donut',
    width: 380,
  },
  colors: ['#1b7dae', '#32a4d5', '#8dceec', '#4db5e3'],
  labels: state.value.labels,
  legend: {
    show: false,
    position: 'bottom',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};
