"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Send, MessageCircle, Mail, User, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { submitSupportTicket } from "./actions"

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const result = await submitSupportTicket(formData)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      // Optional: Handle error case, e.g., show an alert
      alert("Failed to submit ticket. Please try again.")
    }

    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-2 sm:p-4">
        <div className="w-full max-w-4xl backdrop-blur-xl bg-white/30 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          {/* Header */}
          <header className="border-b-4 border-black p-4 sm:p-6 bg-white/40 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="icon" className="rounded-xl border-2 border-black bg-transparent">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-white flex-shrink-0">
                  <Image
                    src="/images/bonkgate-logo.png"
                    alt="BonkGate Detective Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                  BONK<span className="text-bonk-orange">GATE</span> SUPPORT
                </h1>
              </div>
            </div>
          </header>

          <div className="p-6 sm:p-8 text-center">
            <Card className="border-4 border-black rounded-xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-green-50 to-blue-50">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">Thank You!</h2>
              <p className="text-xl text-gray-700 mb-6">
                Your support ticket has been submitted successfully. Our team will get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-bonk-orange hover:bg-bonk-orange/80 text-white rounded-xl border-2 border-black font-bold">
                    Back to Home
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-black rounded-xl font-bold bg-transparent"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ name: "", email: "", telegram: "", category: "", message: "" })
                  }}
                >
                  Submit Another Ticket
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-4xl backdrop-blur-xl bg-white/30 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Header */}
        <header className="border-b-4 border-black p-4 sm:p-6 bg-white/40 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="icon" className="rounded-xl border-2 border-black bg-transparent">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-white flex-shrink-0">
                <Image
                  src="/images/bonkgate-logo.png"
                  alt="BonkGate Detective Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                BONK<span className="text-bonk-orange">GATE</span> SUPPORT
              </h1>
            </div>
          </div>
        </header>

        <div className="p-6 sm:p-8">
          <div className="space-y-8">
            {/* Support Form */}
            <Card className="border-4 border-black rounded-xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white/50">
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-black mb-2">Get Help</h2>
                <p className="text-lg text-gray-700">
                  Having issues with BonkGate? Our support team is here to help you get back on track.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-bonk-orange hover:bg-bonk-orange/80 text-white rounded-xl border-2 border-black font-bold text-xl py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-transform"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Support Ticket
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Quick Help and Community Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-blue-500 p-4 text-white">
                  <h3 className="text-xl font-bold">Quick Help</h3>
                </div>
                <div className="p-4 bg-white space-y-3">
                  <div>
                    <h4 className="font-bold">Installation Issues?</h4>
                    <p className="text-sm text-gray-600">Try refreshing your browser and clearing cache</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Extension Not Working?</h4>
                    <p className="text-sm text-gray-600">Check if BonkGate is enabled in your extensions</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Missing Data?</h4>
                    <p className="text-sm text-gray-600">Data collection starts after installation</p>
                  </div>
                </div>
              </Card>

              <Card className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-green-500 p-4 text-white">
                  <h3 className="text-xl font-bold">Community</h3>
                </div>
                <div className="p-4 bg-white flex flex-col h-full">
                  <p className="text-sm mb-3">Join our community for faster help and updates:</p>
                  <div className="space-y-2 mt-auto">
                    <div className="relative">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-black rounded-xl font-bold text-sm bg-transparent opacity-60"
                        disabled
                      >
                        Telegram Community
                      </Button>
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] flex items-center justify-center rounded-xl">
                        <div className="bg-white/90 border-2 border-black rounded-lg px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <span className="text-sm font-black text-gray-800">COMING SOON</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-black rounded-xl font-bold text-sm bg-transparent"
                    >
                      Twitter Updates
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
