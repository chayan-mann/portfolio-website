import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-48 sm:w-64 md:w-80 lg:w-96 mx-auto overflow-hidden">
            <Image src="/images/profile.jpeg" alt="Profile" fill className="object-cover" priority />
          </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground mb-6">
              I'm a passionate developer with a strong focus on creating intuitive and engaging user experiences. With hands-on experience in both web development and machine learning, I've contributed to projects ranging from responsive business websites to intelligent applications powered by data-driven insights.
              </p>
              <p className="text-muted-foreground mb-6">
                My approach combines technical expertise with creative problem-solving to deliver solutions that not
                only meet but exceed client expectations. I believe in continuous learning and staying updated with the
                latest technologies and industry trends.
              </p>
              <Button asChild>
                <a href="#contact">Let's Work Together</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
