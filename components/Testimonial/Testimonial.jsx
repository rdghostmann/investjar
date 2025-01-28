import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"



const testimonials = [
  {
    name: "Kim Tyler",
    country: "Canada",
    rating: 5,
    comment: "The beauty of Riovest is that you don't need a secure server sitting in your basement",
    avatar: "/placeholder.svg",
  },
  {
    name: "Tyler Carr",
    country: "United Kingdom",
    rating: 5,
    comment:
      "Riovest is committed to making sure that the transactions are secure. This really seems to reassure buyers",
    avatar: "/placeholder.svg",
  },
  // Add more testimonials as needed
]

export function Testimonials() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-gold mb-4">Join many people who use Riovest</h2>
          <h3 className="text-white text-3xl md:text-5xl font-bold mb-4">Don't take our word for it.</h3>
          <h4 className="text-white text-2xl md:text-4xl font-bold mb-6">See what our clients say</h4>
          <p className="text-gray-400">
            We have many happy investors invest with us. Some impressions from our Customers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-indigo-600 border-none">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6">{testimonial.comment}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.country}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

