import { Card, Link } from "@mui/material"

const SupportPage = () => {
  return (
    <div>
      <h1>Support</h1>
      <div>
        <Card>
          <Link href="https://docs.fouryoursafety.fun/use-cases-demonstration">Feature Documentation</Link>
        </Card>
        <Card>
          <Link href="https://docs.fouryoursafety.fun/api-integration">API Reference</Link>
        </Card>
      </div>
      {/* rest of code here */}
    </div>
  )
}

export default SupportPage
