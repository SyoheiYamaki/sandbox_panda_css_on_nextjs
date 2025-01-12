import { Article } from "./definitions";

const articles: Article[] = [
  {
    id: 1,
    title: "The Future of Technology",
    body: `
      <h2>Innovations Driving Change</h2>
      <p>Technology is advancing at an unprecedented pace. From <strong>artificial intelligence</strong> to renewable energy, the future holds exciting possibilities.</p>
      <ul>
        <li>AI-powered tools</li>
        <li>Robotics in healthcare</li>
        <li>Green energy solutions</li>
      </ul>
    `,
    thumbnail_url: "https://placehold.co/600x400?text=Tech"
  },
  {
    id: 2,
    title: "10 Tips for Healthy Living",
    body: `
      <h2>Steps to a Healthier You</h2>
      <p>Living a healthy life requires a balance of mind and body. Here are 10 tips:</p>
      <ol>
        <li>Eat a balanced diet</li>
        <li>Exercise regularly</li>
        <li>Prioritize sleep</li>
      </ol>
      <p>Remember, small steps lead to big changes!</p>
    `,
    thumbnail_url: "https://placehold.co/600x400?text=Health"
  },
  {
    id: 3,
    title: "Top Travel Destinations 2025",
    body: `
      <h2>Explore the World</h2>
      <p>2025 is shaping up to be an incredible year for travel enthusiasts. Here are our top picks:</p>
      <ul>
        <li><strong>Bali</strong>: A tropical paradise with stunning beaches</li>
        <li><strong>Kyoto</strong>: Dive into Japan's rich history and culture</li>
        <li><strong>Iceland</strong>: Witness the breathtaking Northern Lights</li>
      </ul>
    `,
    thumbnail_url: "https://placehold.co/600x400?text=Travel"
  },
  {
    id: 4,
    title: "Mastering the Art of Cooking",
    body: `
      <h2>Take Your Cooking to the Next Level</h2>
      <p>Cooking is both an art and a science. Here are some tips:</p>
      <ul>
        <li>Understand the basics of flavor pairing</li>
        <li>Use fresh, high-quality ingredients</li>
        <li>Experiment with global cuisines</li>
      </ul>
      <p>Let your creativity shine in the kitchen!</p>
    `,
    thumbnail_url: "https://placehold.co/600x400?text=Cooking"
  },
  {
    id: 5,
    title: "The Evolution of E-commerce",
    body: `
      <h2>From Brick-and-Mortar to Digital Marketplaces</h2>
      <p>The e-commerce industry has grown exponentially in the past decade:</p>
      <ul>
        <li>Convenience of online shopping</li>
        <li>Rise of mobile commerce</li>
        <li>Innovations in payment systems</li>
      </ul>
      <p>The future is digital, and businesses must adapt to thrive.</p>
    `,
    thumbnail_url: "https://placehold.co/600x400?text=E-commerce"
  }
];

export { articles };