import Head from 'next/head'
import {Resume} from '../components/Resume'

const Page = props => {
  return (
    <div className="p-12">
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>
      <Resume />
    </div >
  )
}

export default Page