import md from 'markdown-it'
import Link from 'next/link'
import Image from 'next/image'

export default function PostPage({ slug, frontmatter, content }) {
    return (
        <div className='prose mx-auto'>
            <div>
                <p className='mb-0'>{ frontmatter.date }</p>
            </div>
            <Link href={`/posts/${slug}`}>
                <a className='no-underline'><h1>{frontmatter.title}</h1></a>
            </Link>
            { frontmatter.socialImage &&
            <div>
                <Image
                    width={650}
                    height={340}
                    alt={frontmatter.title}
                    src={`/${frontmatter.socialImage}`}
                />
            </div>
            }
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
    )
}
