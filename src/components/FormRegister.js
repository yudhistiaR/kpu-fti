import { Input, Grid, GridItem, FormControl, Button } from '@chakra-ui/react'

const FormRegister = () => {
  return (
    <form>
      <Grid columnGap="4" gap={6}>
        <GridItem>
          <FormControl>
            <Input
              borderColor="blackAlpha.900"
              placeholder="NPM"
              variant="flushed"
              focusBorderColor="#06989e"
              type="text"
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <Input
              borderColor="blackAlpha.900"
              placeholder="Email"
              variant="flushed"
              focusBorderColor="#06989e"
              type="email"
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <Input
              borderColor="blackAlpha.900"
              placeholder="Prodi"
              variant="flushed"
              focusBorderColor="#06989e"
              type="text"
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <Input
              borderColor="blackAlpha.900"
              placeholder="Password"
              variant="flushed"
              focusBorderColor="#06989e"
              type="password"
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <Input
              borderColor="blackAlpha.900"
              placeholder="Confirmasi Password"
              variant="flushed"
              focusBorderColor="#06989e"
              type="text"
            />
          </FormControl>
        </GridItem>
        <Button variant="solid" colorScheme="teal">
          Daftar
        </Button>
      </Grid>
    </form>
  )
}

export default FormRegister
