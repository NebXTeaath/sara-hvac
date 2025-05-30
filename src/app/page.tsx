import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Thermometer,
  Shield,
  Users,
  Building2,
  CheckCircle,
  ArrowRight,
  Wrench,
  Clock,
  Award,
  Fan,
  AirVent,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Fan className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Sara HVAC</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Phone className="w-4 h-4 mr-2" />
            Get Quote
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">17+ Years of Excellence in HVAC</Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Complete HVAC Solutions for <span className="text-blue-600">Mumbai</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    From BPOs to luxury residences, we deliver turnkey HVAC systems with unmatched expertise. Led by
                    Sanjay Kumar Verma with 17+ years of industry experience.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now for Free Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Our Projects
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">17+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">4</div>
                    <div className="text-sm text-gray-600">States Covered</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Modern HVAC Installation"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover w-full"
                  />
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive HVAC Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From design to maintenance, we provide end-to-end HVAC solutions for all sectors
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <AirVent className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Air Conditioning Systems</CardTitle>
                  <CardDescription>
                    Complete AC installation, repair, and maintenance for commercial and residential properties
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Central AC Systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Split AC Installation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      VRF/VRV Systems
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Thermometer className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Ducting Solutions</CardTitle>
                  <CardDescription>
                    Professional ductwork design, installation, and optimization for maximum efficiency
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Duct Design & Installation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Duct Cleaning Services
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Insulation Solutions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Maintenance & Repair</CardTitle>
                  <CardDescription>
                    Regular maintenance and emergency repair services to keep your systems running smoothly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Preventive Maintenance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Emergency Repairs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      System Upgrades
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Commercial HVAC</CardTitle>
                  <CardDescription>
                    Specialized solutions for offices, hospitals, hotels, and industrial facilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      BPO & Call Centers
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Hospitals & Clinics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Hotels & Restaurants
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Green Building Solutions</CardTitle>
                  <CardDescription>
                    Energy-efficient HVAC systems for sustainable and eco-friendly buildings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Energy Efficient Systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      LEED Compliance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Smart Controls
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Residential HVAC</CardTitle>
                  <CardDescription>Premium HVAC solutions for luxury homes and residential complexes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Luxury Residences
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Apartment Complexes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Villa Projects
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Sanjay Kumar Verma - Sara HVAC Founder"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg object-cover w-full"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <Badge className="bg-blue-100 text-blue-800 mb-4">About Sara HVAC</Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Led by Experience, Driven by Excellence
                  </h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    Sara HVAC Systems is headed by <strong>Sanjay Kumar Verma</strong>, an engineering graduate with an
                    MBA from Madras University, bringing over 17 years of rich experience in the HVAC industry.
                  </p>
                  <p>
                    Our founder has been instrumental in executing various Green Building and prestigious projects,
                    implementing turnkey HVAC solutions for numerous industries including BPOs, hospitals, software
                    companies, and hospitality sector.
                  </p>
                  <p>
                    Today, Sara HVAC caters to all sectors with dedicated resources and facilities, providing a wide
                    spectrum of services in this highly specialized field.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">MBA Qualified</div>
                      <div className="text-sm text-gray-600">Madras University</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">17+ Years</div>
                      <div className="text-sm text-gray-600">Industry Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pan-India Service Network</h2>
              <p className="text-xl text-gray-600">
                Serving clients across multiple states with dedicated business associates
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maharashtra</h3>
                <p className="text-gray-600">Mumbai - Head Office</p>
              </Card>
              <Card className="text-center p-6">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Andhra Pradesh</h3>
                <p className="text-gray-600">Business Associates</p>
              </Card>
              <Card className="text-center p-6">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Karnataka</h3>
                <p className="text-gray-600">Service Network</p>
              </Card>
              <Card className="text-center p-6">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tamil Nadu</h3>
                <p className="text-gray-600">Regional Partners</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-xl text-blue-100">Trusted by leading organizations across diverse sectors</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                "BPO & Call Centers",
                "Hotels & Restaurants",
                "Hospitals & Healthcare",
                "Software Companies",
                "Super Markets",
                "Banks & Financial",
                "Auditoriums",
                "Multiplex Cinemas",
                "Guest Houses",
                "Clubs & Recreation",
                "Electronic Media",
                "Showrooms & Retail",
              ].map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 rounded-lg p-4 mb-3">
                    <Building2 className="w-8 h-8 mx-auto" />
                  </div>
                  <p className="text-sm font-medium">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Experience Total Comfort?</h2>
              <p className="text-xl text-blue-100">
                Get a free consultation from our HVAC experts. We provide total comfort and peace of mind with safety,
                efficiency, and economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black text-blue-600 hover:bg-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Free Quote
                </Button>
                <Button
                  size="lg"
                  
                  className=" bg-white text-blue-600 hover:bg-black hover:text-blue-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Fan className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Sara HVAC</span>
              </div>
              <p className="text-gray-400">
                {`Mumbai's trusted HVAC partner for 17+ years. Total comfort, safety, and efficiency.`}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Air Conditioning</li>
                <li>Ducting Solutions</li>
                <li>Maintenance & Repair</li>
                <li>Green Building HVAC</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Commercial Buildings</li>
                <li>Healthcare Facilities</li>
                <li>Hospitality Sector</li>
                <li>Residential Projects</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 XXXX XXXXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@sarahvac.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sara HVAC Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
