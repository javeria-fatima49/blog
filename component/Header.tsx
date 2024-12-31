// "use client";
// import Link from "next/link";
// import { useState } from "react";
  
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//      const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };
// export default function Header() {
//   return (
//     <div className="bg-teal-700 text-center flex justify-between items-center p-5">
//       <div className="text-white">
//         <h1 className="text-2xl font-bold">Javeria's Blog</h1>
//       </div>
//       <div className="hidden md:flex gap-6 text-2xl font-sans">
//         <ul className="flex gap-8">
//           <li>
//             <Link href="/" className="text-white hover:text-orange-400">Home</Link>
//           </li>
//           <li>
//             <Link href="/about" className="text-white hover:text-orange-400">About</Link>
//           </li>
//           <li>
//             <Link href="/post" className="text-white hover:text-orange-400">Blogpost</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-white hover:text-orange-400">Contact</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="md:hidden text-2xl">
//                     <button onClick={toggleMobileMenu} className="focus:outline-none">
//                         &#9776;
//                     </button>
//                 </div>
//                 {isMobileMenuOpen && (
//                 <nav className="md:hidden font-sans">
//                     <ul className="flex flex-col gap-4 mt-4 text-center">
//                         <li><Link href="/">Home</Link></li>
//                         <li><Link href="/about">About</Link></li>
//                         <li><Link href="/projects">Projects</Link></li>
//                         <li><Link href="/contact">Contact</Link></li>
//                     </ul>
//                 </nav>
//             )}
//     </div>
//   );
// }


// "use client";
// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="bg-teal-700 text-center flex justify-between items-center p-5">
//       <div className="text-white">
//         <h1 className="text-2xl font-bold">Javeria's Blog</h1>
//       </div>
//       {/* Desktop Menu */}
//       <div className=" md:flex gap-6 text-2xl font-sans">
//         <ul className="flex gap-8">
//           <li>
//             <Link href="/" className="text-white hover:text-orange-400">Home</Link>
//           </li>
//           <li>
//             <Link href="/about" className="text-white hover:text-orange-400">About</Link>
//           </li>
//           <li>
//             <Link href="/post" className="text-white hover:text-orange-400">Blogpost</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-white hover:text-orange-400">Contact</Link>
//           </li>
//         </ul>
//       </div>
//       {/* Hamburger Menu Button */}
//       <div className="md:hidden text-2xl">
//         <button onClick={toggleMobileMenu} className="focus:outline-none">
//           &#9776;
//         </button>
//       </div>
//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <nav className="md:hidden font-sans">
//           <ul className="flex flex-col gap-4 mt-4 text-center">
//             <li>
//               <Link href="/" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//             </li>
//             <li>
//               <Link href="/about" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
//             </li>
//             <li>
//               <Link href="/projects" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
//             </li>
//             <li>
//               <Link href="/contact" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// }





// "use client";
// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="bg-teal-700 text-center flex justify-between items-center p-5">
//       <div className="text-white">
//         <h1 className="text-2xl font-bold">Javeria's Blog</h1>
//       </div>
//       {/* Desktop Menu */}
//       <div className="hidden md:flex gap-6 text-2xl font-sans">
//         <ul className="flex gap-8">
//           <li>
//             <Link href="/" className="text-white hover:text-orange-400">Home</Link>
//           </li>
//           <li>
//             <Link href="/about" className="text-white hover:text-orange-400">About</Link>
//           </li>
//           <li>
//             <Link href="/post" className="text-white hover:text-orange-400">Blogpost</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-white hover:text-orange-400">Contact</Link>
//           </li>
//         </ul>
//       </div>
//       {/* Hamburger Menu Button */}
//       <div className="md:hidden text-2xl">
//         <button onClick={toggleMobileMenu} className="focus:outline-none">
//           &#9776;
//         </button>
//       </div>
//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <nav className="md:hidden font-sans">
//           <ul className="flex flex-col gap-4 mt-4 text-center">
//             <li>
//               <Link href="/" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//             </li>
//             <li>
//               <Link href="/about" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
//             </li>
//             <li>
//               <Link href="/projects" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
//             </li>
//             <li>
//               <Link href="/contact" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// }





// "use client";
// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="bg-teal-700 text-center flex justify-between items-center p-5">
//       <div className="text-white">
//         <h1 className="text-2xl font-bold">Javeria's Blog</h1>
//       </div>
//       {/* Desktop Menu */}
//       <div className="md:flex hidden  gap-6 text-2xl font-sans">
//         <ul className="flex gap-8">
//           <li>
//             <Link href="/" className="text-white hover:text-orange-400">Home</Link>
//           </li>
//           <li>
//             <Link href="/about" className="text-white hover:text-orange-400">About</Link>
//           </li>
//           <li>
//             <Link href="/post" className="text-white hover:text-orange-400">Blogpost</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="text-white hover:text-orange-400">Contact</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="md:hidden text-2xl">
//         <button onClick={toggleMobileMenu} className="focus:outline-none">
//           &#9776;
//         </button>
//       </div>
//       {isMobileMenuOpen && (
//         <nav className="md:hidden font-sans">
//           <ul className="flex flex-col gap-4 mt-4 text-center">
//             <li>
//               <Link href="/" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//             </li>
//             <li>
//               <Link href="/about" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
//             </li>
//             <li>
//               <Link href="/projects" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
//             </li>
//             <li>
//               <Link href="/contact" className="text-white hover:text-orange-400" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// }















// "use client";
// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
  
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//      const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <header className="bg-teal-800 p-4 text-white">
//             <div className="container mx-auto flex justify-between items-center flex-wrap">
//                 <h1 className="text-2xl font-bold font-serif"><span className="text-[#f8d839] font-extrabold text-3xl" >J</span>averia <span className="text-[#f8d839] font-extrabold text-3xl">P</span>ortfolio</h1>
                

//                 <nav className="hidden md:flex gap-6 text-2xl font-sans">
//                     <ul className="flex gap-6">
//                         <li><Link href="/">Home</Link></li>
//                         <li><Link href="/about">About</Link></li>
//                         <li><Link href="/post">Blogpost</Link></li>
//                         <li><Link href="/contact">Contact</Link></li>
//                     </ul>
//                 </nav>

//                 <div className="md:hidden text-2xl">
//                     <button onClick={toggleMobileMenu} className="focus:outline-none">
//                         &#9776;
//                     </button>
//                 </div>
//             </div>

//             {isMobileMenuOpen && (
//                 <nav className="md:hidden font-sans">
//                     <ul className="flex flex-col gap-4 mt-4 text-center">
//                         <li><Link href="/">Home</Link></li>
//                         <li><Link href="/about">About</Link></li>
//                         <li><Link href="/post">Blogpost</Link></li>
//                         <li><Link href="/contact">Contact</Link></li>
//                     </ul>
//                 </nav>
//             )}
//         </header>
//     );
// }







"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-teal-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <h1 className="text-2xl font-bold font-serif">
                   Javeria&apos;s Blog
                </h1>

                {/* Desktop Navigation (visible only on medium screens and up) */}
                <nav className="hidden md:flex gap-6 text-2xl font-sans">
                    <ul className="flex gap-6">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/post">Blogpost</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Toggle Button (visible only on mobile screens) */}
                <div className="md:hidden text-3xl">
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        &#9776;
                    </button>
                </div>
            </div>

            {/* Mobile Navigation (visible only on mobile screens) */}
            {isMobileMenuOpen && (
                <nav className="md:hidden mt-4">
                    <ul className="flex flex-col gap-4 text-center text-2xl font-sans">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/post">Blogpost</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
