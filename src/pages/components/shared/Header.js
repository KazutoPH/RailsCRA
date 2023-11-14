import RAILS from '../../../assets/RAILS.png'
// const imagePath = process.env.REACT_APP_IMAGE_PATH;
// const imageUrl = `${process.env.PUBLIC_URL}/${imagePath}`;

const Header = () => {
  return (
    <>
      <div className="flex flex-col content-container self-center py-8 2xl:py-12">
        <nav className="flex justify-center mobile:justify-start">
          <div>
            {/* <motion.div
              className="shimmer-text"
              animate={{ backgroundPositionX: "200%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            > */}
            {/* <span className="headertxt text-[100px] 2xl:text-[200px] font-normal text-purple leading-[100%] shimmer-text pl-5">
              RAILS
            </span> */}

            {/* </motion.div> */}
            <div className="h-auto w-[150px] 2xl:w-[300px]">
              <img className="object-contain h-full w-full" src={RAILS} alt="rails" width={150} height={150} />
            </div>

            {/* <Image src="/assets/RAILS.png" 
      alt="rails" 
      width={150} 
      height={150}/>  */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
