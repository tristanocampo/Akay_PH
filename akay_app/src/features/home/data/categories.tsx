import type { CategoryItem } from '../types/home'
import { FaThermometerHalf, FaTooth } from 'react-icons/fa'
import { MdVaccines, MdLocalPharmacy, MdVisibility, MdPregnantWoman } from 'react-icons/md'

export const categories: CategoryItem[] = [
  {
    id: 'cough',
    title: 'Lagnat/Ubo',
    subtitle: 'Fever / Cough',
    iconBgClass: 'bg-[#FFEFF0]',
    iconColorClass: 'text-[#F14E4E]',
    icon: <FaThermometerHalf className="h-7 w-7" aria-hidden="true" />,
  },
  {
    id: 'prenatal',
    title: 'Buntis',
    subtitle: 'Pregnancy / Prenatal',
    iconBgClass: 'bg-[#F4EEFF]',
    iconColorClass: 'text-[#A765F5]',
    icon: <MdPregnantWoman className="h-7 w-7" aria-hidden="true" />,
  },
  {
    id: 'vaccine',
    title: 'Bakuna',
    subtitle: 'Vaccination',
    iconBgClass: 'bg-[#ECF3FF]',
    iconColorClass: 'text-[#4B89EE]',
    icon: <MdVaccines className="h-7 w-7" aria-hidden="true" />,
  },
  {
    id: 'meds',
    title: 'Maintenance Meds',
    subtitle: 'Prescriptions',
    iconBgClass: 'bg-[#ECFAF3]',
    iconColorClass: 'text-[#28B76B]',
    icon: <MdLocalPharmacy className="h-7 w-7" aria-hidden="true" />,
  },
  {
    id: 'dental',
    title: 'Ngipin',
    subtitle: 'Dental',
    iconBgClass: 'bg-[#E9FAF5]',
    iconColorClass: 'text-[#20BFA7]',
    icon: <FaTooth className="h-7 w-7" aria-hidden="true" />,
  },
  {
    id: 'vision',
    title: 'Paningin',
    subtitle: 'Vision / Eye Care',
    iconBgClass: 'bg-[#FFF2E7]',
    iconColorClass: 'text-[#FF8A2A]',
    icon: <MdVisibility className="h-7 w-7" aria-hidden="true" />,
  },
]
