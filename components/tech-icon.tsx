import Image from "next/image"

const iconMap: Record<string, string> = {
  react: "/icons/react.svg",
  reactjs: "/icons/react.svg",
  nextjs: "/icons/nextjs.svg",
  tailwind: "/icons/tailwind.svg",
  tailwindcss: "/icons/tailwind.svg",
  javascript: "/icons/javascript.svg",
  typescript: "/icons/typescript.svg",
  html5: "/icons/html5.svg",
  html: "/icons/html5.svg",
  css: "/icons/css.svg",
  nodejs: "/icons/nodejs.svg",
  node: "/icons/nodejs.svg",
  express: "/icons/express.svg",
  mongodb: "/icons/mongodb.svg",
  postgresql: "/icons/postgresql.svg",
  mysql: "/icons/mysql.svg",
  firebase: "/icons/firebase.svg",
  git: "/icons/git.svg",
  github: "/icons/github.svg",
  docker: "/icons/docker.svg",
  aws: "/icons/aws.svg",
  python: "/icons/python.svg",
  django: "/icons/django.svg",
  flask: "/icons/flask.svg",
  cpp: "/icons/cpp.svg",
  c: "/icons/c.svg",
  java: "/icons/java.svg",
  php: "/icons/php.svg",
  ruby: "/icons/ruby.svg",
  rails: "/icons/rails.svg",
  vue: "/icons/vue.svg",
  angular: "/icons/angular.svg",
  bootstrap: "/icons/bootstrap.svg",
  sass: "/icons/sass.svg",
  redux: "/icons/redux.svg",
  graphql: "/icons/graphql.svg",
  webpack: "/icons/webpack.svg",
  babel: "/icons/babel.svg",
  jest: "/icons/jest.svg",
  cypress: "/icons/cypress.svg",
  solidity: "/icons/solidity.svg",
  rust: "/icons/rust.svg",
  go: "/icons/go.svg",
  kotlin: "/icons/kotlin.svg",
  swift: "/icons/swift.svg",
  flutter: "/icons/flutter.svg",
  dart: "/icons/dart.svg",
  redis: "/icons/redis.svg",
  elasticsearch: "/icons/elasticsearch.svg",
  kubernetes: "/icons/kubernetes.svg",
  terraform: "/icons/terraform.svg",
  jenkins: "/icons/jenkins.svg",
  circleci: "/icons/circleci.svg",
  travis: "/icons/travis.svg",
  heroku: "/icons/heroku.svg",
  vercel: "/icons/vercel.svg",
  netlify: "/icons/netlify.svg",
  figma: "/icons/figma.svg",
  sketch: "/icons/sketch.svg",
  xd: "/icons/xd.svg",
  tensorflow: "/icons/tensorflow.svg",
  pytorch: "/icons/pytorch.svg",
  pandas: "/icons/pandas.svg",
  numpy: "/icons/numpy.svg",
  scikit: "/icons/scikit.svg",
  sklearn: "/icons/sklearn.svg",
  langchain: "/icons/langchain.svg",
  fastapi: "/icons/fastapi.svg",
  prisma: "/icons/prisma.svg",
  archlinux: "/icons/archlinux.svg",
  linux: "/icons/linux.svg",
  ubuntu: "/icons/ubuntu.svg",
  windows: "/icons/windows.svg",
  macos: "/icons/macos.svg",
  api: "/icons/api.svg",
  cicd: "/icons/cicd.svg",
  dataviz: "/icons/dataviz.svg",
  sql: "/icons/mysql.svg",
  tableau: "/icons/tableau.svg",
  kafka : "/icons/kafka.svg",
  nestjs: "/icons/nestjs.svg"
}

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const normalizedName = name.toLowerCase().replace(/\s+/g, "").replace(/\./g, "")

  const iconPath = iconMap[normalizedName] || "/icons/code.svg" 

  return (
    <div className={`relative ${className || "w-6 h-6"}`}>
      <Image
        src={iconPath || "/placeholder.svg"}
        alt={`${name} icon`}
        width={24}
        height={24}
        className={`w-full h-full object-contain ${className}`}
      />
    </div>
  )
}
