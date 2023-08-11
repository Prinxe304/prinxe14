import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/links/NFT Collection Website Using React Js.png'
import thumbHowToUseInkdrop from '../public/images/contents/g.png'
import thumb500PaidUsers from '../public/images/contents/Screenshot 2023-07-04 at 7.24.16 PM.png'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to build a NFT website"
            thumbnail={thumbPortfolio}
            href="https://youtube.com/@princecodes"
          />
          <GridItem
            title="How to take notes in Markdown efficiently with Plan"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.instagram.com/reel/CsWgUVKNiWp/?igshid=MzRlODBiNWFlZA=="
          />
          {/* <GridItem
            title="My Fish workflow"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
          <GridItem
            title="My desk setup (Late 2020)"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
          /> */}
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How I’ve Attracted The Brans For collaboration That Costs $700"
            thumbnail={thumb500PaidUsers}
            href="https://www.instagram.com/reel/CuKJtN6MOLt/?igshid=MzRlODBiNWFlZA=="
          />
          <GridItem
            title="I stopped setting a financial goal Focus on sparxie.in"
            thumbnail={thumbFinancialGoal}
            href="https://instagram.com/prinxecodes?igshid=MmIzYWVlNDQ5Yg=="
          />
        </SimpleGrid>
      </Section>

      {/* <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=vj723NlrIQc"
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
