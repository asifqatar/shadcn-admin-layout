
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'
export default function SignUp() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center space-y-2">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Create an account</CardTitle>
            <CardDescription>Enter your information to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  placeholder="Create a password"
                  type="password"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  type="password"
                  required
                  className="w-full"
                />
              </div>
              <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                Create account
              </Button>
            </form>
            <div className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/" className="font-medium text-primary-600 hover:text-primary-500">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }