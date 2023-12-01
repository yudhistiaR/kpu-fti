'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getCookie } from 'cookies-next'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Total suara pasangan calon'
    }
  },
  scale: {
    ticks: {
      precision: 0
    }
  }
}

export function BarChart() {
  const token = getCookie('token')
  const [bem, setBem] = useState(null)
  const [si, setSi] = useState(null)
  const [ti, setTi] = useState(null)

  useEffect(() => {
    const getDatas = async () => {
      try {
        const res = await axios.get('/api/statistik', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setBem(res.data.bem)
        setTi(res.data.ti)
        setSi(res.data.si)
      } catch (error) {
        console.log(error)
      }
    }

    getDatas()
  }, [])

  let dt = bem?.concat(si, ti)

  let myData = dt?.map(el => {
    return {
      label: el.nama_paslon,
      data: [
        {
          x: el.type.toUpperCase(),
          [el.nama_paslon]: el.pemilih.length
        }
      ],
      parsing: {
        yAxisKey: el.nama_paslon
      },
      backgroundColor:
        el.type === 'bem'
          ? 'rgb(255, 99, 132)'
          : null || el.type === 'si'
          ? 'rgb(54, 162, 235)'
          : null || el.type === 'ti'
          ? 'rgb(255, 205, 86)'
          : null
    }
  })

  const data = {
    labels: ['BEM', 'SI', 'TI'],
    datasets: myData ?? [{}]
  }

  return <Bar datasetIdKey="id" height={200} options={options} data={data} />
}

export default BarChart
