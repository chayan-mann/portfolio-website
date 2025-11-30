import Navbar from "@/components/navbar";
import Blogs from "@/components/blogs";
import Footer from "@/components/footer";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}
