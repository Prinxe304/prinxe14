import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*pichu">
    <Container>
      <Title>
        pichu*pichu <Badge>2021</Badge>
      </Title>
      <P>
        A Twitter client app for iPhone Safari, made in the iPhone xsmax era. I
        built it for my research work at a graduate school. Got over 2,000
        users.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iPhone Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP , Django , Python</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Ecommerce coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="/">
            <Badge mr={2}>4.6 Star </Badge>
            Website for shopping{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="/">
            <Badge mr={2}>LauraHouse Labs</Badge>
            Animation and live records{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/pichu2_eyecatch.png" alt="Pichu*Pichu" />
      {/* <WorkImage src="/images/works/pichu2_01.png" alt="Pichu*Pichu" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
