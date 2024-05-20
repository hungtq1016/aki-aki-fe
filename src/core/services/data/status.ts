import { StatusEnum } from '@/core/models/enum'
import { CalendarDaysIcon, CheckCircleIcon, CheckIcon, ClockIcon, CurrencyDollarIcon, CurrencyEuroIcon, CurrencyYenIcon, HandThumbDownIcon, HandThumbUpIcon, NoSymbolIcon, TrashIcon, XMarkIcon } from '@heroicons/vue/24/outline'

export const status = [
    {
      label : 'table.active',
      value : StatusEnum.Active,
      classes: 'text-green-600 bg-green-100 disabled:bg-green-50 disabled:text-green-300',
      icon: CheckIcon
    },
    {
      label : 'table.inactive',
      value : StatusEnum.Inactive,
      classes: 'text-gray-600 bg-gray-100 disabled:bg-gray-50 disabled:text-gray-300',
      icon: NoSymbolIcon
    },
    {
      label : 'table.pending',
      value : StatusEnum.Pending,
      classes: 'text-amber-600 bg-amber-100 disabled:bg-amber-50 disabled:text-amber-300',
      icon: ClockIcon
    },
    {
      label : 'table.completed',
      value : StatusEnum.Completed,
      classes: 'text-blue-600 bg-blue-100 disabled:bg-blue-50 disabled:text-blue-300',
      icon: CheckCircleIcon
    },
    {
      label : 'table.canceled',
      value : StatusEnum.Canceled,
      classes: 'text-red-600 bg-red-100 disabled:bg-red-50 disabled:text-red-300',
      icon: XMarkIcon
    },
    {
      label : 'table.remove',
      value : StatusEnum.Remove,
      classes: 'text-stone-600 bg-stone-100 disabled:bg-stone-50 disabled:text-stone-300',
      icon: TrashIcon
    },
    {
      label : 'table.accepted',
      value : StatusEnum.Accepted,
      classes: 'text-lime-600 bg-lime-100 disabled:bg-lime-50 disabled:text-lime-300',
      icon: HandThumbUpIcon
    },
    {
      label : 'table.rejected',
      value : StatusEnum.Rejected,
      classes: 'text-rose-600 bg-rose-100 disabled:bg-rose-50 disabled:text-rose-300',
      icon: HandThumbDownIcon
    },
    {
      label : 'table.notpaid',
      value : StatusEnum.NotPaid,
      classes: 'text-orange-600 bg-orange-100 disabled:bg-orange-50 disabled:text-orange-300',
      icon: CurrencyDollarIcon
    },
    {
      label : 'table.halfpaid',
      value : StatusEnum.HalfPaid,
      classes: 'text-gold-600 bg-gold-100 disabled:bg-gold-50 disabled:text-gold-300',
      icon: CurrencyYenIcon
    },
    {
      label : 'table.fullypaid',
      value : StatusEnum.FullyPaid,
      classes: 'text-sky-600 bg-sky-100 disabled:bg-sky-50 disabled:text-sky-300',
      icon: CurrencyEuroIcon
    },
    {
      label : 'table.overdue',
      value : StatusEnum.Overdue,
      classes: 'text-tomato-600 bg-tomato-100 disabled:bg-tomato-50 disabled:text-tomato-300',
      icon: CalendarDaysIcon
    }
  ]