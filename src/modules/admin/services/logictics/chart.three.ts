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
  {
      value: 'lastday',
      label: 'table.lastday'
  },
  {
      value: 'currentday',
      label: 'table.currentday'
  },
  {
      value: 'lastweek',
      label: 'table.lastweek'
  },
  {
      value: 'currentweek',
      label: 'table.currentweek'
  },
  {
      value: 'lastmonth',
      label: 'table.lastmonth'
  },
  {
      value: 'currentmonth',
      label: 'table.currentmonth'
  },
  {
      value: 'lastquarter',
      label: 'table.lastquarter'
  },
  {
      value: 'currentquarter',
      label: 'table.currentquarter'
  },
  {
      value: 'lastyear',
      label: 'table.lastyear'
  },
  {
      value: 'currentyear',
      label: 'table.currentyear'
  },
  {
      value: 'all',
      label: 'table.all'
  }
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

export const fetch = async () => {
  state.value.series = [];
  state.value.labels = [];
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

export const colors =["#8dceec", "#51b5df", "#32a4d5", "#1b7dae", "#17648d", "#175575", "#194861"]

export const apexOptions = {
  chart: {
    type: 'donut',
    width: 380,
  },
  colors: colors,
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
