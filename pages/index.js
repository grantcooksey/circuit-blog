import fs from 'fs';
import matter from 'gray-matter';
import PostPage from '../components/post_page';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      frontmatter,
      content
    };
  }).sort((a,b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className='mx-auto flex-1 flex-col'>
      {posts.map(({ slug, frontmatter, content }) => (
        <div key={slug} className='py-4 odd:bg-white even:bg-slate-100'>
          <PostPage frontmatter={frontmatter} content={content} slug={slug} />
        </div>
      ))}
    </div>
  );
}
