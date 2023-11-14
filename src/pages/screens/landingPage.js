import { motion } from "framer-motion";
import { FadeIn, ListAnimate } from "../components/framer/variants";
import { links, teamadvisor } from "../constant/constant";

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Success from "../components/popup/Success";
import postEmail from "../../api/postEmail";

const getImgUrl = (path) => {
  // Construct the URL using `require` to import the asset
  const imageUrl = require(`../../assets/${path}.png`);

  return imageUrl;
};

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const ref = useRef(null);

  const _press = async (e) => {
    e.preventDefault();
    setIsloading(true);
    setPopup(true);
    const res = await postEmail(email);
    if (!res) {
      setIsError(true);
      setIsloading(false);
      return null;
    }
    if (res.status !== 200) {
      setIsError(true);
      setIsloading(false);
    } else {
      setIsError(false);
      setIsloading(false);
    }
  };

  const samp = (val) => {
    setPopup(val);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <main className="flex flex-col items-center">
        <div className="flex lg:flex-row gap-3 flex-col content-container pt-0 mt-5">
          <div className="flex flex-1 lg:flex-none lg:w-[40%] lg:pr-3 2xl:w-[45%] flex-col self-start">
            {/* <p className='text-heading1-bold text-dark1'>
            Payment Rails for Emerging Markets
          </p> */}
            <p className="text-heading1-bold font-Lato 2xl:text-heading1-bold-xl text-dark1">
              Payment Rails for Emerging Markets
            </p>

            <p className="text-content-text font-Lato 2xl:text-content-text-xl text-dark-2 mt-2">
              Complete Payment Infrastructure for Businesses and their
              Consumers.
            </p>

            <div>
              <div className="flex my-8 justify-center mobile:justify-start">
                <button
                  className="btn1"
                  onClick={() =>
                    ref.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <p className="text-btn-text 2xl:text-btn-text-xl">
                    Contact Us
                  </p>
                </button>
              </div>

              <div className="flex flex-col 2xl:gap-5">
                <div className="flex items-center">
                  <div className="h-[25px] w-[25px]  mr-3  min-w-[25px] 2xl:h-12 2xl:min-w-[50px]">
                    <img
                      src={getImgUrl("phflag")}
                      alt="phflag"
                      className="object-contain h-auto w-auto"
                    />
                  </div>

                  <p className=" font-Abeeze text-text-1 2xl:text-text-1-xl text-dark2">
                    EMI, VASP and Custodian Licenses
                  </p>
                </div>

                <div className="flex items-center mt-2">
                  <div className="h-[25px] w-[25px]  mr-3  min-w-[25px] 2xl:h-12 2xl:min-w-[50px]">
                    <img
                      src={getImgUrl("shield")}
                      alt="shield"
                      className="object-containh-auto w-auto"
                    />
                  </div>

                  <p className=" font-Abeeze  text-text-1 2xl:text-text-1-xl text-dark2">
                    KYC/AML/CTF, KYT, Travel Rule, and Sanctions Compliant
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 overflow-hidden">
            <motion.div
              variants={FadeIn("right", 0.04)}
              // variants=FadeAnimate("down", 0.2)
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="flex h-auto w-full items-center justify-center max-h-[600px] lg:justify-end 2xl:max-h-[700px]"
            >
              <img
                src={getImgUrl("dashboard")}
                alt="Dashboard"
                className="object-contain h-full w-auto"
                width={553.66}
                height={352}
              />
            </motion.div>

            <motion.div
              variants={FadeIn("left", 0.75)}
              // variants=FadeAnimate("down", 0.2)
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.6 }}
              className="flex h-auto w-full aspect-[1.6/1] justify-end -mt-[52%] overflow-hidden"
            >
              <img
                src={getImgUrl("mobiledashboard")}
                alt="mobiledashboard"
                className="object-contain h-full w-auto sx:-mx-10 -mx-5 max-h-[600px] 2xl:max-h-[750px]"
                width={443}
                height={436}
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-10 2xl:mt-40 w-full items-center">
          <div className="flex flex-col banner overflow-hidden md:overflow-visible items-center">
            <div className="flex flex-row content-container items-center relative">
              <motion.div
                variants={FadeIn("right", 0.02)}
                // variants=FadeAnimate("down", 0.2)
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
                className="w-4/12 h-96 max-w-[500px] absolute bottom-0 lg:block hidden"
              >
                <img
                  src={getImgUrl("halfmobile")}
                  alt="halfmobile"
                  className="object-contain h-auto w-full absolute bottom-0 max-h-[350px] 2xl:max-h-[550px]"
                  width={289.691}
                  height={625.179}
                />
              </motion.div>
              <div className="w-4/12 max-w-[500px] lg:block hidden"></div>
              <div className="flex flex-col flex-1 lg:ml-20 2xl:py-5 mt-5 mb-0 lg:my-5">
                <p className=" font-Lato text-heading2-bold 2xl:text-heading1-bold-xl text-light">
                  Our Philippines Gateway is Live!
                </p>

                <p className=" font-Lato text-2content-text md:text-[20px] 2xl:text-content-text-xl text-light mt-2">
                  Try our fully functioning MVP to compliantly access the
                  Philippines market and power your business. Stay tuned for the
                  new platform with rebranding!
                </p>

                <div className="flex flex-col sm:flex-row sx:flex-row gap-3 mt-6 items-center self-center md:self-start">
                  {links.map((data, i) => (
                    <Link to={data.url} key={i}>
                      <div className="h-auto w-full items-center justify-center max-w-[170px] 2xl:max-w-[300px] hover:scale-110 duration-300">
                        <img
                          src={getImgUrl(data.img)}
                          alt={data.name}
                          className="object-contain h-full w-full"
                          width={553.66}
                          height={352}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              variants={FadeIn("up", 0.04)}
              // variants=FadeAnimate("down", 0.2)
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.6 }}
              className=" w-4/12 h-auto min-w-[210px] lg:hidden block self-center"
            >
              <img
                src={getImgUrl("halfmobile")}
                alt="halfmobile"
                className="object-contain h-auto w-full max-h-[400px]"
                width={289.691}
                height={625.179}
              />
            </motion.div>
          </div>
        </div>

        <div className="cflex flex-col content-container items-center text-center md:text-start w-full py-10">
          <p className="font-Lato text-heading2-bold 2xl:text-heading2-bold-xl text-dark-1">
            Team & Advisors From
          </p>
          {/* 
            <div className="grid sm:grid-cols-3 md:grid-cols-5 md:gap-y-6 lg:grid-cols-6  grid-cols-2 mx-5 gap-y-8 gap-x-6 w-full mt-5">  */}
          <div className="flex flex-row sx:justify-around justify-evenly gap-x-10 gap-y-10 md:gap-y-5  2xl:gap-x-12 2xl:gap-y-10 flex-wrap mt-12">
            {teamadvisor.map((data, i) => (
              <motion.div
                variants={ListAnimate}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                custom={i}
                className={`flex items-center justify-center w-full max-w-[200px] 2xl:max-w-[250px] mobile:max-w-none mobile:w-auto`}
                key={i}
              >
                  {/* // ${data.name=== 'Fico' && 'max-h-8' }
                  // ${data.name==='Ocean' && 'max-h-24' }
                  // ${data.name==='Kroll' && 'max-h-10' }
                  // ${data.name=== 'Hi' && 'max-h-16' } */}
                  <img
                    src={getImgUrl(data.img)}
                    alt={data.name}
                    className={`object-contain  w-auto h-auto aspect-auto max-w-[200px] 2xl:max-w-[300px] 
                      ${
                        data.maxh
                          ? `${data.maxh} ${data.maxhxl}`
                          : `max-h-20 2xl:max-h-40`
                      }
          
                      `}
                    width={data.w}
                    height={data.h}
                  />
              </motion.div>
            ))}
          </div>

          <p className="text-[21.33px] font-Lato 2xl:text-[40px] text-dark-1 font-medium mt-10 italic">
            And More...
          </p>
        </div>

        <div className="flex flex-col bggradientimg items-center">
          <div className="bggradient" />
          <div className="flex flex-col content-container z-20 w-full relative flex-shrink items-start">
            <div>
              <p className=" font-Lato text-heading2-semibold 2xl:text-heading2-semibold-xl text-light">
                First Access & Custom Solutions
              </p>

              <div className="flex items-center mt-4 mb-1">
                <div className="h-[25px] w-[25px]  mr-3  min-w-[25px] 2xl:h-12 2xl:min-w-[40px]">
                  <img
                    src={getImgUrl("web")}
                    alt="Web"
                    className="object-contain h-full w-full"
                    width={30}
                    height={30}
                  />
                </div>
                <p className=" font-Abeeze text-2content-text 2xl:text-2content-text-xl text-light">
                  EMI, VASP and Custodian Licenses
                </p>
              </div>

              <div className="flex items-center mb-1">
                <div className="h-[25px] w-[25px]  mr-3  min-w-[25px] 2xl:h-12 2xl:min-w-[40px]">
                  <img
                    src={getImgUrl("credit")}
                    alt="Credit"
                    className="object-contain h-full w-full"
                    width={30}
                    height={30}
                  />
                </div>
                <p className=" font-Abeeze text-2content-text 2xl:text-2content-text-xl text-light">
                  Pre-order the RAILS Card
                </p>
              </div>

              <div className="flex items-center">
                <div className="h-[25px] w-[25px]  mr-3  min-w-[25px] 2xl:h-12 2xl:min-w-[40px]">
                  <img
                    src={getImgUrl("mobile")}
                    alt="Credit"
                    className="object-contain h-full w-full"
                    width={30}
                    height={30}
                  />
                </div>
                <p className=" font-Abeeze text-2content-text 2xl:text-2content-text-xl text-light">
                  Custom Integrations and White labels
                </p>
              </div>

              <form onSubmit={_press}>
                <input
                  ref={ref}
                  required
                  type="email"
                  className="w-full txtinput my-8"
                  placeholder="Enter your email here"
                  onChange={handleChange}
                />

                <div>
                  <button type="submit" className="btn1 w-full">
                    <p className=" font-Lato text-btn-text-2 2xl:text-btn-text-2-xl">
                      Let's Go
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {popup ? (
          <Success handlePress={samp} loading={isLoading} isError={isError} />
        ) : null}
      </main>
    </>
  );
};
export default LandingPage;
