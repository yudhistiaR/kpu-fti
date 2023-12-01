'use client'
import { Card, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import StorePaslon from '@/components/ui/StorePaslon'
import FormStorePaslon from '@/components/form/FormStorePaslon'
import Chart from '@/components/ui/Chart'

const Dashboard = () => {
  return (
    <Card p="2">
      <Tabs colorScheme="telegram" isFitted>
        <TabList>
          <Tab fontWeight="semibold">Tambah Paslon</Tab>
          <Tab fontWeight="semibold">List Pemilih</Tab>
          <Tab fontWeight="semibold">Statistik</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <StorePaslon />
            <FormStorePaslon />
          </TabPanel>
          <TabPanel>List User</TabPanel>
          <TabPanel>
            <Chart />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  )
}

export default Dashboard
