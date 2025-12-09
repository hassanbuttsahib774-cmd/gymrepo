import { Link } from 'react-router-dom';
import styles from '../../styles/BlogSection.module.css';
import blog1 from '../../assets/img/blog/blog-1.jpg';
import blog2 from '../../assets/img/blog/blog-2.jpg';
import blog3 from '../../assets/img/blog/blog-3.jpg';
import blog4 from '../../assets/img/blog/blog-4.jpg';
import blog5 from '../../assets/img/blog/blog-5.jpg';
import latest1 from '../../assets/img/letest-blog/latest-1.jpg';
import latest2 from '../../assets/img/letest-blog/latest-2.jpg';
import latest3 from '../../assets/img/letest-blog/latest-3.jpg';
import latest4 from '../../assets/img/letest-blog/latest-4.jpg';
// import latest5 from '../../assets/img/letest-blog/latest5.jpg';
import latest5 from '../../assets/img/letest-blog/latest-5.jpg';
// Placeholder images
// const blog1 = 'https://via.placeholder.com/360x240/151515/f36100?text=Blog+1';
// const blog2 = 'https://via.placeholder.com/360x240/151515/f36100?text=Blog+2';
// const blog3 = 'https://via.placeholder.com/360x240/151515/f36100?text=Blog+3';
// const blog4 = 'https://via.placeholder.com/360x240/151515/f36100?text=Blog+4';
// const blog5 = 'https://via.placeholder.com/360x240/151515/f36100?text=Blog+5';
// const latest1 = 'https://via.placeholder.com/400x200/151515/f36100?text=Latest+1';
// const latest2 = 'https://via.placeholder.com/100x100/151515/f36100?text=L2';
// const latest3 = 'https://via.placeholder.com/100x100/151515/f36100?text=L3';
// const latest4 = 'https://via.placeholder.com/100x100/151515/f36100?text=L4';
// const latest5 = 'https://via.placeholder.com/100x100/151515/f36100?text=L5';

const BlogSection = () => {
  const blogPosts = [
    { id: 1, image: blog1, title: 'Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...', author: 'Admin', date: 'Aug,15, 2019', comments: 20 },
    { id: 2, image: blog2, title: 'Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...', author: 'Admin', date: 'Aug,15, 2019', comments: 20 },
    { id: 3, image: blog3, title: 'Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...', author: 'Admin', date: 'Aug,15, 2019', comments: 20 },
    { id: 4, image: blog4, title: 'Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...', author: 'Admin', date: 'Aug,15, 2019', comments: 20 },
    { id: 5, image: blog5, title: 'Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...', author: 'Admin', date: 'Aug,15, 2019', comments: 20 }
  ];

  const latestPosts = [
    { id: 1, image: latest1, title: 'This Japanese Way of Making Iced Coffee Is a Game...', date: 'Aug 20, 2019', comments: 20 },
    { id: 2, image: latest2, title: 'Grilled Potato and Green Bean Salad', date: 'Aug 15, 2019' },
    { id: 3, image: latest3, title: 'The $8 French Rosé I Buy in Bulk Every Summer', date: 'Aug 15, 2019' },
    { id: 4, image: latest4, title: 'Ina Garten\'s Skillet-Roasted Lemon Chicken', date: 'Aug 15, 2019' },
    { id: 5, image: latest5, title: 'The Best Weeknight Baked Potatoes, 3 Creative Ways', date: 'Aug 15, 2019' }
  ];

  const categories = [
    { name: 'Yoga', count: 12 },
    { name: 'Runing', count: 32 },
    { name: 'Weightloss', count: 86 },
    { name: 'Cario', count: 25 },
    { name: 'Body buiding', count: 36 },
    { name: 'Nutrition', count: 15 }
  ];

  const tags = ['Gyming', 'Body buidling', 'Yoga', 'Weightloss', 'Proffeponal', 'Streching', 'Cardio', 'Karate'];

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 p-0">
            {blogPosts.map((post) => (
              <div key={post.id} className={styles.blogItem}>
                <div className={styles.biPic}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.biText}>
                  <h5><Link to="/blog-details">{post.title}</Link></h5>
                  <ul>
                    <li>by {post.author}</li>
                    <li>{post.date}</li>
                    <li>{post.comments} Comment</li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
                    labore et dolore magna aliqua accumsan lacus facilisis.</p>
                </div>
              </div>
            ))}
            <div className={styles.blogPagination}>
              <Link to="#">1</Link>
              <Link to="#">2</Link>
              <Link to="#">3</Link>
              <Link to="#">Next</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 p-0">
            <div className={styles.sidebarOption}>
              <div className={styles.soCategories}>
                <h5 className={styles.title}>Categories</h5>
                <ul>
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <Link to="#">{cat.name} <span>{cat.count}</span></Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.soLatest}>
                <h5 className={styles.title}>Feature posts</h5>
                <div 
                  className={styles.latestLarge}
                  style={{ backgroundImage: `url(${latest1})` }}
                >
                  <div className={styles.llText}>
                    <h5><Link to="/blog-details">{latestPosts[0].title}</Link></h5>
                    <ul>
                      <li>{latestPosts[0].date}</li>
                      <li>{latestPosts[0].comments} Comment</li>
                    </ul>
                  </div>
                </div>
                {latestPosts.slice(1).map((post) => (
                  <div key={post.id} className={styles.latestItem}>
                    <div className={styles.liPic}>
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className={styles.liText}>
                      <h6><Link to="/blog-details">{post.title}</Link></h6>
                      <span className={styles.liTime}>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.soTags}>
                <h5 className={styles.title}>Popular tags</h5>
                {tags.map((tag, idx) => (
                  <Link key={idx} to="#">{tag}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

