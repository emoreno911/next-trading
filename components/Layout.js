import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>Tradding App</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.3/solar/bootstrap.min.css" />
    </Head>
    <div className="container">
      {props.children}
    </div>
  </div>
)

export default Layout