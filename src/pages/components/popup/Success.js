import { motion } from "framer-motion";

function Success({ handlePress, loading, isError}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="transparentbg"
    >
      <div className="popupcontainer">
        {loading ? (
          <div className="flex justify-center w-full my-12">
              <svg  className="animate-spin" fill="none" height={100} viewBox="0 0 48 48" width={100} xmlns="http://www.w3.org/2000/svg"><path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/></svg>
          </div>
        ) : ( isError ? (
            <>
            <p className="text-heading2-bold text-light text-center">
              There was an error sending your email
            </p>
            <div className="my-8">
              <button
                className="popupbtn w-full"
                onClick={() => handlePress(false)}
              >
                <p className="text-btn-text-2">Okay</p>
              </button>
            </div>
          </>
          ):(
            <>
            <p className="text-heading2-bold text-light text-center">
              Thank you for joining...
            </p>
            <div className="my-8">
              <button
                className="popupbtn w-full"
                onClick={() => handlePress(false)}
              >
                <p className="text-btn-text-2">Okay</p>
              </button>
            </div>
          </>
          )

        )}

      </div>
    </motion.div>
  );
}

export default Success;
