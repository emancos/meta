import NotificationButton from '../NotificationButton'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import './styles.css'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../utils/request'
import { Sale } from '../../models/sale'

function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365))
  const max = new Date()

  const [minDate, setMinDate] = useState(min)
  const [maxDate, setMaxDate] = useState(max)
  const [sales, setSales] = useState<Sale[]>([])

  useEffect(() => {
    const startDate = new Date(minDate).toISOString().slice(0, 10)
    const endDate = new Date(maxDate).toISOString().slice(0, 10)

    axios
      .get(`${BASE_URL}/sales?minDate=${startDate}&maxDate=${endDate}`)
      .then((request) => setSales(request.data.content))
  }, [minDate, maxDate])

  return (
    <>
      <div className='meta-card'>
        <h2 className='meta-sales-title'>Vendas</h2>
        <div>
          <div className='meta-form-control-container'>
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              className='meta-form-control'
              dateFormat='dd/MM/yyyy'
            />
          </div>
          <div className='meta-form-control-container'>
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              className='meta-form-control'
              dateFormat='dd/MM/yyyy'
            />
          </div>
        </div>

        <div>
          <table className='meta-sales-table'>
            <thead>
              <tr>
                <th className='show992'>ID</th>
                <th className='show576'>Data</th>
                <th>Vendedor</th>
                <th className='show992'>Visitas</th>
                <th className='show992'>Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => {
                return (
                  <tr key={sale.id}>
                    <td className='show992'>{sale.id}</td>
                    <td className='show576'>
                      {new Date(sale.date).toLocaleDateString()}
                    </td>
                    <td>{sale.sellerName}</td>
                    <td className='show992'>{sale.visited}</td>
                    <td className='show992'>{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td>
                      <div className='meta-red-btn-container'>
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SalesCard
