import Navbar from './navbar'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='bg-cement font-ttHoves'>{children}</main>
    </>
  )
}

export default layout