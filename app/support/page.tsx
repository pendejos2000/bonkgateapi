"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  BookOpen,
  ExternalLink,
  Send,
  User,
  AlertCircle,
  MessageCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { submitSupportTicket } from "./actions"
import { useActionState } from "react"
import Image from "next/image"

export default function SupportPage() {
  const [state, formAction, isPending] = useActionState(submitSupportTicket, null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    category: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-2 sm:p-4">
      <div className="w-full max-w-4xl mx-auto backdrop-blur-xl bg-white/30 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Header */}
        <header className="border-b-4 border-black p-4 sm:p-6 bg-white/40 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="icon" className="rounded-xl border-2 border-black bg-transparent">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-black flex-shrink-0">
                <Image
                  src="/images/fys-logo.png"
                  alt="FourYourSafety FYS Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-black">
                FOUR<span className="text-bonk-orange">YOUR</span>SAFETY Support
              </h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 sm:p-6 md:p-8">
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
            </TabsList>

            <TabsContent value="contact">
              <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact Support
                  </CardTitle>
                  <CardDescription>
                    Have a question or issue? Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-lg font-bold flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Name
                        <span className="text-bonk-orange">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        className="border-2 border-black rounded-xl p-3 text-lg"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-lg font-bold flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                        <span className="text-bonk-orange">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-2 border-black rounded-xl p-3 text-lg"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telegram" className="text-lg font-bold flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Telegram Username
                        <span className="text-gray-500 text-sm font-normal">(optional)</span>
                      </Label>
                      <Input
                        id="telegram"
                        name="telegram"
                        type="text"
                        placeholder="@yourusername"
                        className="border-2 border-black rounded-xl p-3 text-lg"
                        value={formData.telegram}
                        onChange={(e) => handleInputChange("telegram", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-lg font-bold flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Issue Category
                        <span className="text-bonk-orange">*</span>
                      </Label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={(e) => handleInputChange("category", e.target.value)}
                        className="w-full border-2 border-black rounded-xl p-3 text-lg bg-white"
                        required
                      >
                        <option value="">Select an issue category</option>
                        <option value="installation">Installation Issues</option>
                        <option value="features">Feature Not Working</option>
                        <option value="performance">Performance Issues</option>
                        <option value="data">Data/Tracking Issues</option>
                        <option value="account">Account Issues</option>
                        <option value="billing">Billing Questions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-lg font-bold flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Message
                        <span className="text-bonk-orange">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please describe your issue in detail. Include any error messages, steps to reproduce the problem, and your browser/OS information if relevant."
                        className="min-h-[150px] border-2 border-black rounded-xl p-3 text-lg resize-none"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    {state?.success && (
                      <div className="p-4 bg-green-100 border-2 border-black rounded-xl">
                        <p className="font-bold text-green-800">{state.message}</p>
                      </div>
                    )}
                    {state?.success === false && (
                      <div className="p-4 bg-red-100 border-2 border-black rounded-xl flex items-start gap-3">
                        <Clock className="h-5 w-5 text-red-800 flex-shrink-0 mt-0.5" />
                        <p className="font-bold text-red-800">
                          {state.error || "Failed to submit ticket. Please try again."}
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-bonk-orange hover:bg-bonk-orange/80 text-white rounded-xl border-2 border-black font-bold text-xl py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isPending ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Support Ticket
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="troubleshooting">
              <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Troubleshooting & FAQ
                  </CardTitle>
                  <CardDescription>
                    Having issues with FourYourSafety? Check our comprehensive FAQ for quick solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-bonk-orange/10 to-yellow-100/50 border-2 border-black rounded-xl">
                    <h3 className="text-lg font-bold mb-3">Need Help?</h3>
                    <p className="text-gray-700 mb-4">
                      Before reaching out to support, please check our FAQ section. Most common issues and questions are
                      covered there with detailed solutions and explanations.
                    </p>
                    <p className="text-sm text-gray-600 mb-4">Our troubleshooting guide includes:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 mb-6">
                      <li>Extension installation and setup issues</li>
                      <li>Account and authentication problems</li>
                      <li>Feature-specific troubleshooting</li>
                      <li>Browser compatibility information</li>
                      <li>Performance optimization tips</li>
                    </ul>
                    <Button
                      asChild
                      className="w-full bg-bonk-orange hover:bg-bonk-orange/80 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <a
                        href="https://docs.fouryoursafety.fun/troubleshooting-faq"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        View Troubleshooting FAQ
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="p-4 bg-blue-50 border-2 border-black rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong>Still need help?</strong> If you can't find a solution in the FAQ, feel free to reach out
                      through the Contact tab above.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documentation">
              <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Documentation
                  </CardTitle>
                  <CardDescription>Comprehensive guides and documentation for FourYourSafety</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <a
                      href="https://docs.fouryoursafety.fun/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border-2 border-black rounded-xl hover:bg-black/5 transition-colors"
                    >
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        Getting Started Guide
                        <ExternalLink className="h-4 w-4" />
                      </h3>
                      <p className="text-sm text-gray-600">Learn how to install and set up FourYourSafety extension</p>
                    </a>
                    <a
                      href="https://docs.fouryoursafety.fun/use-cases-demonstration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border-2 border-black rounded-xl hover:bg-black/5 transition-colors"
                    >
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        Feature Documentation
                        <ExternalLink className="h-4 w-4" />
                      </h3>
                      <p className="text-sm text-gray-600">Detailed guides for all features and capabilities</p>
                    </a>
                    <a
                      href="https://docs.fouryoursafety.fun/api-integration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border-2 border-black rounded-xl hover:bg-black/5 transition-colors"
                    >
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        API Reference
                        <ExternalLink className="h-4 w-4" />
                      </h3>
                      <p className="text-sm text-gray-600">Technical documentation for developers</p>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
