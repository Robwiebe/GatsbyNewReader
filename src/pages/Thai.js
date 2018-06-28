import React from 'react';
import Link from 'gatsby-link'
import styles from './tocindex.module.css';
import SVLogo from '../images/SVLogo.jpeg';

const Thai = ({data}) => (
    <div>
        <img src={SVLogo} />
        <div className={styles.changeLanguage}>
            <Link to="/">
                <p className={styles.switchlang}><span className={styles.switch}>&#x2261;</span>Change Language</p>
            </Link>
        </div>
        <details>
            <summary>{data.Matthew.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Matthew.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Mark.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Mark.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Luke.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Luke.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.John.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.John.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <details>
            <summary>{data.Acts.edges.slice(0,1).map( post => (<span className={styles.bookTitle} key={post.node.id}>{post.node.bookName}</span>))}</summary>
                <ul>
                    {data.Acts.edges.map(post => (
                        <li key={post.node.id}><Link to={post.node.path} className={styles.link}>
                            <p className={styles.title}>{post.node.title}</p>
                            <p className={styles.reference}>{post.node.bookName} {post.node.ref}</p>
                            <hr /></Link>
                        </li>
                    ))}
                </ul>
        </details>
        <h5 className={styles.copyright}>&#169; 2018 SourceView LLC.</h5>
    </div>
    
)

export const pageQuery = graphql`
    query ThaiIndexQuery {
        Matthew: allPostsJson(filter: {bookName: {eq: "มัทธิว"}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        Mark: allPostsJson(filter: {bookName: {eq: "มาระโก"}}) {
        edges {
            node {
                id
                bookId
                bookName
                ref
                path
                title
            }
        }
        },
        Luke: allPostsJson(filter: {bookName: {eq: "ลูกา"}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        },
        John: allPostsJson(filter: {bookName: {eq: "ยอห์น"}}) {
        edges {
            node {
            id
            bookId
            bookName
            ref
            path
            title
            }
        }
        },
        Acts: allPostsJson(filter: {bookName: {eq: "กิจการของอัครทูต"}}) {
            edges {
              node {
                id
                bookId
                bookName
                ref
                path
                title
              }
            }
        }
    }
`;

export default Thai;