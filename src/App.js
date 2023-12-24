import { useState } from "react";
import { motion } from "framer-motion"
import message from "./message";
import arrow from "./arrow_forward.png"

function App() {
  let [index, setIndex] = useState(0)
  const [text, setText] = useState([message[0]])

  const handleNext = () => {
    setIndex(index+=1)
    const newMessage = `${message[index]}`

    if (text.length > 2) {
      setText([newMessage])
    } else {
      setText((prev) => [...prev, newMessage])
    }

    console.log(index)
    
  }

  return (
    <div className="w-full min-h-screen flex flex-col gap-10 items-center justify-center align-center bg-slate-950 text-slate-200">
      <motion.p 
        initial={{ y: -300 }} 
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 3 }}
        className="font-mono text-3xl absolute top-[100px]">{`< Merry Hanukkah. >`}</motion.p>
        {/* Render Text */}
          {text.map((text, i) => {
            return(
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="my-6 leading-loose text-center text-2xl max-w-6xl" 
                key={i}
              >{text}
              </motion.p>
              // <p className="my-8 leading-loose text-center text-xl max-w-6xl" key={i}>{text}</p>
            )
          })}
          
          {/* <p className="text-2xl max-w-4xl">{text}</p> */}

        {/* Next Button */}
        <motion.button
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        className="text-3xl text-white absolute right-[100px]" onClick={() => handleNext()}>
          <img src={arrow} />
        </motion.button>
    </div>
  );
}

export default App;
