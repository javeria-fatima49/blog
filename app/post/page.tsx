import Blogcard from '../../component/Blogcard';

const blogData = [
  { id: '1', title: 'Introduction to Web Development', description: 'Web development is the backbone of the digital world.', image: "/image/Intro+to+Web+Dev-29.png" },
  { id: '2', title: 'Understanding Front-End Development', description: 'Front-end development is a critical part of the web development process.', image: "/image/what-is-front-end-development.webp" },
  { id: '3', title: 'Back-End Development: The Server Side', description: 'Back-end development is the part of web development that happens behind the scenes.', image: "/image/backend.png" },
  { id: '4', title: 'Full-Stack Development:Front-End and Back-End', description: 'Full-stack development is the practice of working with both front-end and back-end technologies.', image: "/image/Full-Stack-Developer.jpg" },
  { id: '5', title: 'Becoming a Web Developer: The Roadmap', description: 'If you&apos;re interested in becoming a web developer, you might be wondering where to start.', image: "/image/roadmap.jpg" },
  { id: '6', title: 'Build Projects and Practice', description: 'Why Projects Are Important:Projects are the bridge between learning and applying knowledge.They allow you to', image: "/image/practice.webp" },
  { id: '7', title: 'Learn Deployment and Hosting', description: 'Why Deployment Matters: Deployment is a critical step in software development, allowing you to:', image: "/image/Web-App-Deployment.jpg" },
  { id: '8', title: 'Learn Testing and Debugging', description: 'Testing and debugging are essential for delivering reliable and high-quality applications:.', image: "/image/testing-debugging.avif" },
  { id: '9', title: 'Build Your Resume and Network', description: 'Highlight your expertise in technologies like HTML, CSS, JavaScript, and frameworks like React or Next.js.', image: "/image/resume-image.jpg" },
];

const BlogList = () => {
  return (
    <div>
     <div className='px-4 pb-4 text-black'>
       <h1 className='text-3xl font-bold pb-4'>Welcome to My Web Development Blog!</h1>
      <p className='text-xl font-normal'>Dive into the world of web development with articles designed for both beginners and experienced developers. 
This blog covers everything from the basics of web development to more advanced topics like front-end, back-end, and full-stack development.

You’ll find practical tips on building projects, deploying your work, and debugging code. Whether you&apos;re looking to 
start your web development journey or level up your skills, there&apos;s something here for everyone. Explore the posts, learn 
something new, and start building your future as a web developer today!</p></div>
      <div className="p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">{blogData.map((blog) => (
        <div className='hover:shadow-2xl hover:scale-105 transition duration-300'>           
         <div className="flex justify-center items-center mb-4">
        <img src={blog.image} alt={blog.title} className="w-96 h-48  text-3xl font-bold text-[#324c70] object-cover rounded-lg" />
      </div><Blogcard key={blog.id} id={blog.id} title={blog.title} description={blog.description} /></div>
      ))}
    </div></div>
  );
};

export default BlogList;
