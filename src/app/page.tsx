import { Button } from './shared';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.

export default async function Home() {
  let data = await fetch('http://localhost:3000/api/test', {
    next: { revalidate: 10 },
  });
  let posts = await data.json();
  return (
    <div>
      <Button>
        <>{posts.message}</>
      </Button>
    </div>
  );
}
