import Layout from '../components/Layout'
import '../styles/globals.css'
import { ApolloClient,InMemoryCache,ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://swift-sprint.testingnow.me/graphql',
    // uri:'https://48p1r2roz4.sse.codesandbox.io',
    cache : new InMemoryCache()
});
function MyApp({ Component, pageProps, ...appProps }) {
  const usingLayout = ['/404','/500'].includes(appProps.router.pathname);
  return (
    <>
    <ApolloProvider client={client}>
      {
        usingLayout ? <Component {...pageProps} /> :
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
      </ApolloProvider>
    </>
   
  )
}

export default MyApp
