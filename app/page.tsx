import BlogList from './post/page'; 

const Home = () => {
  return (
    <div className=" px-4 bg-white text-black">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Blog</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Blog Posts</h2>
        <BlogList />
     </section>
    </div>
  );
};
export default Home;

