import { useState } from 'react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PhoneNumberField from './PhoneNumberField';
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";
import sendEmail from "../helpers/sendEmail";
import { isValidPhoneNumber } from "react-phone-number-input";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isSendingMail, setIsSendingMail] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    if (phoneError) {
      toast("❌ Please fix the errors in the form before submitting.");
      return;
    }

    if (
      !formData.name?.trim() ||
      !formData.email?.trim() ||
      !formData.company?.trim() ||
      !formData.phone?.trim() ||
      !formData.subject?.trim() ||
      !formData.message?.trim()
    ) {
      toast("❌ Kindly fill in all required fields.");
      return;
    }

    if (isValidPhoneNumber(formData?.phone.trim()) === false) {
      toast("❌ Kindly enter a valid phone number.");
      return;
    }

    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      toast("❌ Kindly enter a valid email address.");
      return;
    }

    setIsSendingMail(true);

    const templateParams = {
      username: import.meta.env?.VITE_USERNAME ?? "",
      password: import.meta.env?.VITE_PASSWORD ?? "",
      templateCode: import.meta.env?.VITE_TEMPLATE_CODE ?? "",
      to: [
        import.meta.env?.VITE_SENDER_EMAIL_ONE ?? "",
        import.meta.env?.VITE_SENDER_EMAIL_TWO ?? "",
        import.meta.env?.VITE_SENDER_EMAIL ?? ""
      ].filter(email => email !== ""),
      placeholders: {
        from_name: formData.name,
        to_name: import.meta.env?.VITE_SENDER_NAME ?? "",
        message: `
          Name: ${formData.name} <br/>
          Email: ${formData.email} <br/>
          ${formData.company ? `Company: ${formData.company} <br/>` : ''}
          ${formData.phone ? `Phone: ${formData.phone} <br/>` : ''}
          Subject: ${formData.subject} <br/>
          Message: <br/>${formData.message}
        `,
      },
    };
    const replyTemplateParams = {
      username: import.meta.env?.VITE_USERNAME ?? "",
      password: import.meta.env?.VITE_PASSWORD ?? "",
      templateCode: import.meta.env?.VITE_REPLY_TEMPLATE_CODE ?? "",
      to: [formData?.email ?? ""],
      placeholders: {
        to_name: formData?.name ?? "",
      },
    };

    let emailSent = false;

    try {
      const responseOne = await sendEmail(templateParams);
      console.log(responseOne);
      if (
        responseOne?.status === "error" ||
        responseOne?.data?.status === "failed"
      ) {
        emailSent = false;
        setIsSendingMail(false);
        toast("❌ Failed to send enquiry. Try again later.");
      } else {
        emailSent = true;
      }
    } catch (err) {
      console.error(err);
      emailSent = false;
      setIsSendingMail(false);
      toast("❌ Failed to send enquiry. Try again later.");
    }

    if (emailSent) {
      try {
        const responseTwo = await sendEmail(replyTemplateParams);
        console.log(responseTwo);
        if (
          responseTwo?.status === "error" ||
          responseTwo?.data?.status === "failed"
        ) {
          setIsSendingMail(false);
          toast("❌ Failed to send enquiry. Try again later.");
        } else {
          setIsSendingMail(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            subject: '',
            message: ''
          });
          toast.success(
            "Message sent successfully. Thank you for reaching out. We’ll get back to you shortly.",
          );
        }
      } catch (err) {
        console.error(err);
        setIsSendingMail(false);
        toast("❌ Failed to send enquiry. Try again later.");
      }
    }
  };

  const offices = [
    {
      name: "Head Office",
      address: "111/109A, Civil Aerodrome Road, SIHS Colony, Singanallur, Coimbatore‑641014",
      phone: "+91 90871 02929",
      phone2: "",
      email: "aspiregrandexcel@gmail.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
  ];
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;

  return (
    <div className="min-h-screen py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      {metaTitle ? (
        <h1 className="visually-hidden">
          {metaTitle}
        </h1>
      ) : null}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Contact Us</h2>
        <p className="text-lg md:text-lg text-gray-500 max-w-3xl mx-auto">
          Get in touch with our expert team to discuss your textile manufacturing needs. We're
          here to help you find the perfect solution for your business.
        </p>
      </div>

      {/* Contact Form and Info */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="rounded-2xl border-gray-100 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-normal text-primary">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-10 bg-[#f4f4f6] border-0 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="h-10 bg-[#f4f4f6] border-0 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      className="h-10 bg-[#f4f4f6] border-0 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <PhoneNumberField
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onError={setPhoneError}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter the subject"
                    className="h-10 bg-[#f4f4f6] border-0 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    className="bg-[#f4f4f6] border-0 rounded-lg text-sm resize-none"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSendingMail} className="w-full bg-[#202058] hover:bg-[#202058]/90 text-white rounded-lg h-10">
                  {isSendingMail ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact Info */}
          <div className="space-y-6">
            <Card className="rounded-2xl border-gray-100 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-sm font-normal text-primary">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <a href="tel:+919087102929" className="flex items-start space-x-3 transition-colors cursor-pointer group">
                  <Phone className="h-4 w-4 text-accent mt-0.5" strokeWidth={1.5} />
                  <div className="leading-tight">
                    <p className="font-semibold text-sm text-gray-900">Primary Contact</p>
                    <p className="text-gray-500 text-sm mt-0.5">+91 90871 02929</p>
                    <p className="text-xs text-gray-400 mt-0.5">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </a>

                <a href="mailto:aspiregrandexcel@gmail.com" className="flex items-start space-x-3 transition-colors cursor-pointer group">
                  <Mail className="h-4 w-4 text-accent mt-0.5" strokeWidth={1.5} />
                  <div className="leading-tight">
                    <p className="font-semibold text-sm text-gray-900">Email</p>
                    <p className="text-gray-500 text-sm mt-0.5">aspiregrandexcel@gmail.com</p>
                    <p className="text-xs text-gray-400 mt-0.5">Response within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 text-accent mt-0.5" strokeWidth={1.5} />
                  <div className="leading-tight">
                    <p className="font-semibold text-sm text-gray-900">Business Hours</p>
                    <p className="text-gray-500 text-sm mt-0.5">Monday - Friday</p>
                    <p className="text-xs text-gray-400 mt-0.5">9:00 AM - 6:00 PM (IST)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2b2b5f] text-white rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="text-base font-bold mb-3">Need Immediate Assistance?</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-200">
                  Contact our technical support team during business hours for
                  machinery issues, service requests, and technical guidance.
                </p>
                <a href="tel:+919087102929">
                  <Button className="bg-[#f1a43a] hover:bg-[#f1a43a]/90 text-white border-0 rounded-lg h-9 px-6 text-sm">
                    Call Support
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Location & Map */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-orange-50 to-amber-50 p-8 md:p-12 mb-6 sm:mb-8 md:mb-20">
        {/* Decorative animated elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-accent/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Office Location</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Office Information */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-primary flex items-center">
                  <MapPin className="h-5 w-5 text-accent mr-2" />
                  {offices[0].name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-3">
                <a href="https://maps.app.goo.gl/2vZaKTHTMZdUWAeV6" target="_blank" rel="noopener noreferrer" className="text-gray-600 leading-relaxed hover:text-primary transition-colors cursor-pointer block">
                  {offices[0].address}
                </a>

                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-gray-600">{offices[0].hours}</span>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => window.open('https://maps.app.goo.gl/2vZaKTHTMZdUWAeV6', '_blank', 'noopener,noreferrer')}
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1449574147833!2d76.91844597474586!3d10.991591855535085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b2da5555555%3A0x3ba85b2da5555555!2sCivil%20Aerodrome%20Road%2C%20SIHS%20Colony%2C%20Singanallur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641014!5e0!3m2!1sen!2sin!4v1735046400000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aspire Grand Excel Office Location"
                    className="absolute inset-0"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Highlights */}

        </div>
      </section>
    </div>
  );
}