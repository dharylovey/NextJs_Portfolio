'use client'


import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Component() {
  return (

    <section 
      id="contact" 
      className="py-16 mx-4"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      
      <div className="flex justify-center items-center">
        <Card className="w-full max-w-lg shadow-xl border-slate-500/[0.5] bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-5xl font-bold mb-10">Contact Me</CardTitle>
            <CardDescription>Please contact me directly at{' '}
              <Link
                href="mailto:mdhar1487@gmail.com"
                className="underline hover:text-indigo-500 transition duration-500"
              >
                 mdhar1487@gmail.com
              </Link>{' '}
              or through form
            </CardDescription> 
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" required />
            </div>
            <Button type="submit" className="w-full bg-slate-600 hover:bg-white hover:text-black">Send message</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

