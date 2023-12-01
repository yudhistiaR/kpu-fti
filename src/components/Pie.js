'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { getCookie } from 'cookies-next'

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = () => {
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

  let sumBem = bem
    ?.map(item => item.pemilih.length)
    .reduce((acc, a) => acc + a, 0)

  let sumSi = si
    ?.map(item => item.pemilih.length)
    .reduce((acc, a) => acc + a, 0)

  let sumTi = ti
    ?.map(item => item.pemilih.length)
    .reduce((acc, a) => acc + a, 0)

  const options = {
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Total pemilih tiap bilik'
      }
    }
  }

  const data = {
    labels: ['BEM', 'Sistem Informasi', 'Teknik Informatika'],
    datasets: [
      {
        label: 'Total Suara',
        data: [sumBem, sumSi, sumTi],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }
    ]
  }
  return <Pie data={data ?? [{}]} options={options} />
}

export default PieChart
