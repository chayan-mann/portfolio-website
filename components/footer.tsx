import Link from "next/link"
import { Github, Twitter, Linkedin} from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-xl font-bold">
                Portfolio
              </Link>
              <p className="text-muted-foreground mt-2 text-sm">
                © {new Date().getFullYear()} Chayan Mann. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/chayan-mann"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/30 transition-colors"
                aria-label="GitHub"
                target = "_blank"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/chayan_mann"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/30 transition-colors"
                aria-label="Twitter"
                target = "_blank"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/chayan-mann/"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
{/* 
                <Link
                href="https://leetcode.com/u/chayan_mann/"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/30 transition-colors"
                aria-label="LeetCode"
                target="_blank"
                rel="noopener noreferrer"
                >
                <CodeXml className="h-5 w-5" /> */}

              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
