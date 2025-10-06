import { Button } from "@chakra-ui/react"
import { TrendingUp } from "react-feather"

const Page = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <Button
          asChild
          className="bg-green-500 hover:bg-green-600 text-white rounded-xl border-2 border-black font-bold px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          <a
            href="https://letsbonk.fun/token/3gy2xMouoB4awZKZeB8Cgwa3Gco2jh5BPmyDBKdWbonk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            Trade $FYS
          </a>
        </Button>
        {/* rest of code here */}
      </header>

      {/* Mobile Menu Section */}
      <nav>
        <Button
          asChild
          className="bg-green-500 hover:bg-green-600 text-white rounded-xl border-2 border-black font-bold px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          <a
            href="https://letsbonk.fun/token/3gy2xMouoB4awZKZeB8Cgwa3Gco2jh5BPmyDBKdWbonk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            Trade $FYS
          </a>
        </Button>
        {/* rest of code here */}
      </nav>
    </div>
  )
}

export default Page
