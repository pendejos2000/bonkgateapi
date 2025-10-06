import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        {/* Brand section */}
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <Image
            src="/images/fys-hand-logo.jpg"
            alt="FourYourSafety Detective Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        {/* Other sections can be added here */}
      </div>
    </footer>
  )
}

export default Footer
