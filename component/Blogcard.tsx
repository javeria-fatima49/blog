import Link from 'next/link';

interface BlogcardProps {
  id: string;
  title: string;
  description: string;
}

const Blogcard = ({ id, title, description }: BlogcardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-semibold text-black">{title}</h2>
      <p className="text-black">{description}</p>
      <Link href={`/post/${id}`} passHref>
        <button className="mt-4 bg-teal-800 text-white py-2 px-4 rounded hover:bg-teal-800 transition-all">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default Blogcard;
