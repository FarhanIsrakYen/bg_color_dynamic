import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState('#F0F8FF')

  return (
    <>
      <div className="w-full h-screen"
      style={{backgroundColor: color}}
      >
        <div
            className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
        >
            <div className="flex flex-wrap justify-center gap-3
             shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button className="outline-none px-4 py-1 rounded-full text-black font-bold
                shadow-lg" style={{backgroundColor: "#F0F8FF"}}
                onClick={() => {setColor("#F0F8FF")}}>
                    Alice Blue
                </button>
                <button className="outline-none px-4 py-1 rounded-full text-black font-bold
                shadow-lg" style={{backgroundColor: "#FFD700"}}
                onClick={() => {setColor("#FFD700")}}>
                    Gold
                </button>
                <button className="outline-none px-4 py-1 rounded-full text-black font-bold
                shadow-lg" style={{backgroundColor: "#FFFACD"}}
                onClick={() => {setColor("#FFFACD")}}>
                    Lemon Chiffon
                </button>
                <button className="outline-none px-4 py-1 rounded-full text-black font-bold
                shadow-lg" style={{backgroundColor: "#FFE4E1"}}
                onClick={() => {setColor("#FFE4E1")}}>
                    Misty Rose
                </button>
                <button className="outline-none px-4 py-1 rounded-full text-black font-bold
                shadow-lg" style={{backgroundColor: "#E0FFFF"}}
                onClick={() => {setColor("#E0FFFF")}}>
                    Light Cyan
                </button>
                <button className="outline-none px-4 py-1 rounded-full text-black font-bold
                shadow-lg" style={{backgroundColor: "#F5F5DC"}}
                onClick={() => {setColor("#F5F5DC")}}>
                    Beige
                </button>
                <button className="outline-none px-4 py-1 rounded-full text-black font-bold
                shadow-lg" style={{backgroundColor: "#FFE4C4"}}
                        onClick={() => {setColor("#FFE4C4")}}>
                    Bisque
                </button>
                <button className="outline-none px-4 py-1 rounded-full text-black font-bold
                shadow-lg" style={{backgroundColor: "#D8BFD8"}}
                onClick={() => {setColor("#D8BFD8")}}>
                    Thistle
                </button>
                <button className="outline-none px-4 py-1 rounded-full text-black font-bold
                shadow-lg" style={{backgroundColor: "#FAEBD7"}}
                onClick={() => {setColor("#FAEBD7")}}>
                    Antique White
                </button>
                <button className="outline-none px-4 py-1 rounded-full text-black font-bold
                shadow-lg" style={{backgroundColor: "#E6E6FA"}}
                onClick={() => {setColor("#E6E6FA")}}>
                    Lavender
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
