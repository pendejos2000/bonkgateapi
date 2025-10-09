import Link from "next/link"

const Page = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="https://github.com/fouryoursafety" target="_blank" rel="noopener noreferrer">
              Add to Browser
            </Link>
          </li>
          {/* rest of code here */}
        </ul>
      </nav>
      <main>{/* main content here */}</main>
    </div>
  )
}

export default Page
