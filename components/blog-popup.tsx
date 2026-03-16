 "use client";

 import { useState } from "react";
 import Link from "next/link";
 import { X } from "lucide-react";
 import { Button } from "@/components/ui/button";

 export default function BlogPopup() {
   const [open, setOpen] = useState(true);

   if (!open) return null;

   return (
     <div className="fixed top-4 right-4 z-50">
       <div className="relative max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/90 px-4 py-3 shadow-xl backdrop-blur-md">
         <button
           aria-label="Close notification"
           className="absolute right-2 top-2 rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
           onClick={() => setOpen(false)}
         >
           <X className="h-4 w-4" />
         </button>

         <div className="pr-6">
           <p className="text-sm font-medium text-white">
             Read the new blog article
           </p>
           <p className="mt-1 text-xs text-zinc-400">
             I just published a fresh post. Want to check it out?
           </p>
         </div>

         <div className="mt-3 flex gap-2">
           <Button asChild size="sm" className="h-8 px-3 text-xs">
             <Link href="/blogs">Take me to the blog</Link>
           </Button>
           <Button
             size="sm"
             variant="outline"
             className="h-8 px-3 text-xs border-zinc-700 text-zinc-300 hover:bg-zinc-800"
             onClick={() => setOpen(false)}
           >
             Close
           </Button>
         </div>
       </div>
     </div>
   );
 }

