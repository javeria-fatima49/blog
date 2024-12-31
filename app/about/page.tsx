import Image from "next/image";

export default function About() {
    return (
        <div className="bg-white  text-black flex flex-col md:flex-row p-10  md:p-40 justify-between items-center min-h-screen ">
            <div className="flex-1  -pt-9 mb-0 md:mb-0">
                <h1 className="font-bold text-3xl md:text-4xl mb-4 font-serif">About Me</h1>
                <p className="text-sm md:text-md">
                    Hello! I&apos;m Javeria Fatima, a passionate learner currently in my second year of pre-medical studies.
                    While my academic path is in pre-med, my curiosity for technology led me to explore web development.
                    I&apos;ve been building my skills in Next.js, TypeScript, HTML, CSS, and Tailwind CSS, and
                    I love creating interactive and visually engaging applications.
                </p>

                <h1 className="font-bold text-3xl md:text-4xl mt-8 mb-4 font-serif">Learning & Growing</h1>
                <p className="text-sm md:text-md">
                    Balancing my studies with my interest in tech has been challenging but rewarding, and
                    I&apos;m always excited to take on new projects that push my skills further.
                    I believe in the power of technology to create meaningful experiences, and
                    I&apos;m looking forward to connecting with others who share this passion.
                    Whether it&apos;s about web development, user experience, or new tech trends, I&apos;d love to connect!
                </p>
            </div>
            <div className="flex-1 w-full md:ml-8">
                <Image
                    src="/image/woman-wearing-hijab.avif"
                    alt="Profile"
                    layout="intrinsic"
                    width={800}
                    height={500}
                    className="object-cover h-full w-full rounded-lg transform transition duration-300 hover:scale-105"
                />
            </div>         
</div>
);
}
