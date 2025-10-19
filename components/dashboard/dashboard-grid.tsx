import { KPICard } from './kpi-card'
import {
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  TrendingUp,
  Package,
  Clock,
  Star,
} from 'lucide-react'

const kpiData = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: { value: 20.1, type: 'increase' as const },
    icon: DollarSign,
    description: 'Revenue from all sources',
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: { value: 15.3, type: 'increase' as const },
    icon: Users,
    description: 'Users active in last 30 days',
  },
  {
    title: 'Total Orders',
    value: '1,234',
    change: { value: 5.2, type: 'decrease' as const },
    icon: ShoppingCart,
    description: 'Orders placed this month',
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: { value: 2.1, type: 'increase' as const },
    icon: TrendingUp,
    description: 'Visitors to customers',
  },
  {
    title: 'Avg. Order Value',
    value: '$89.00',
    change: { value: 0, type: 'neutral' as const },
    icon: Package,
    description: 'Average order value',
  },
  {
    title: 'Response Time',
    value: '1.2s',
    change: { value: 12.5, type: 'decrease' as const },
    icon: Clock,
    description: 'Average response time',
  },
  {
    title: 'Server Uptime',
    value: '99.9%',
    change: { value: 0.1, type: 'increase' as const },
    icon: Activity,
    description: 'Server uptime this month',
  },
  {
    title: 'Customer Score',
    value: '4.8',
    change: { value: 8.2, type: 'increase' as const },
    icon: Star,
    description: 'Average customer rating',
  },
]

export function DashboardGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpiData.map((kpi, index) => (
        <div
          key={kpi.title}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <KPICard {...kpi} />
        </div>
      ))}
    </div>
  )
}