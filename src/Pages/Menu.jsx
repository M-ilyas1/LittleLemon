import Biryani from '../assets/images/aaaa.png'
import SearchBox from '../components/SearchBox'
const Menu = () => {
  return (
    <>
      <section 
      className="heroSection flex justify-center items-center py-36"
      style={{ 
          backgroundImage: `url(${Biryani})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
      <SearchBox />

      </section>
    </>
  )
}

export default Menu