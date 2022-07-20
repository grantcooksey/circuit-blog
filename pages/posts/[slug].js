import fs from 'fs';
import matter from 'gray-matter';
import PostPage from '../../components/post_page';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}

export default function Page({ slug, frontmatter, content }) {
  return <PostPage slug={slug} frontmatter={frontmatter} content={content} />
}
