import { Card, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import StorePaslon from '@/components/ui/StorePaslon'
import FormStorePaslon from '@/components/FormStorePaslon'

const Dashboard = () => {
  return (
    <Card p="2">
      <Tabs colorScheme="telegram" isFitted>
        <TabList>
          <Tab fontWeight="semibold">Tambah Paslon</Tab>
          <Tab fontWeight="semibold">List Pemilih</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <StorePaslon />
            <FormStorePaslon />
          </TabPanel>
          <TabPanel>Makan nasi 2</TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  )
}

export default Dashboard
