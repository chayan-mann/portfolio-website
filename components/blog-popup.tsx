 "use client";

 import { useEffect, useState } from "react";
 import Link from "next/link";
 import { X } from "lucide-react";
 import { Button } from "@/components/ui/button";

 export default function BlogPopup() {
   const [open, setOpen] = useState(false);

   useEffect(() => {
     if (typeof window === "undefined") return;

     const hasSeen = sessionStorage.getItem("blogPopupSeen");
     if (!hasSeen) {
       setOpen(true);
       sessionStorage.setItem("blogPopupSeen", "true");
     }
   }, []);

   if (!open) return null;

  return (
    <div className="fixed inset-x-2 top-3 z-50 flex justify-end sm:inset-x-auto sm:right-4">
      <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/95 px-3 py-3 shadow-xl backdrop-blur-md sm:px-4">
         <button
           aria-label="Close notification"
           className="absolute right-2 top-2 rounded-full p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
           onClick={() => setOpen(false)}
         >
           <X className="h-4 w-4" />
         </button>

        <div className="pr-7">
          <p className="text-xs font-medium text-white sm:text-sm">
             Read the new blog article
           </p>
           <p className="mt-1 text-[11px] text-zinc-400 sm:text-xs">
             I just published a fresh post. Want to check it out?
           </p>
         </div>

        <div className="mt-3 flex flex-wrap gap-2">
           <Button
             asChild
             size="sm"
             className="h-8 px-3 text-[11px] sm:text-xs"
             onClick={() => setOpen(false)}
           >
             <Link href="/blogs">Take me to the blog</Link>
           </Button>
           <Button
             size="sm"
             variant="outline"
             className="h-8 px-3 text-[11px] border-zinc-700 text-zinc-300 hover:bg-zinc-800 sm:text-xs"
             onClick={() => setOpen(false)}
           >
             Close
           </Button>
         </div>
       </div>
     </div>
   );
 }

