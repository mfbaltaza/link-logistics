// import localFont from "next/font/local";
import Navbar from './navbar'

// const ttHoves = localFont({
//   src: [
//     { path: "../../public/fonts/TTHoves-Light.woff2", weight: "300", variable: '--font-ttHoves' },
//     { path: "../../public/fonts/3B00A2_1_0.woff2", weight: "400", variable: '--font-ttHoves' },
//     { path: "../../public/fonts/TTHoves-Medium.woff2", weight: "500", variable: '--font-ttHoves' },
//     { path: "../../public/fonts/3B00A2_0_0.woff2", weight: "600", variable: '--font-ttHoves' },
//     { path: "../../public/fonts/TTHoves-Bold.woff2", weight: "700", variable: '--font-ttHoves' }
//   ],
// });

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='bg-cement'>{children}</main>
    </>
  )
}

export default layout