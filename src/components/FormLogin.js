import { Input, Grid, GridItem, FormControl, Button } from '@chakra-ui/react'

const FormLogin = () => {
  return (
    <form>
      <Grid columnGap="4" gap={6}>
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
              placeholder="Password"
              variant="flushed"
              focusBorderColor="#06989e"
              type="password"
            />
          </FormControl>
        </GridItem>
        <Button variant="solid" colorScheme="teal">
          Login
        </Button>
      </Grid>
    </form>
  )
}

export default FormLogin
