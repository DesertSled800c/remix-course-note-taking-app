import { Link } from "@remix-run/react";
import homeStyles from '~/styles/home.css'
export default function Index() {
  return (
  <>
    <main id="content">
      <h1>Lets make notes using Remix!</h1>
      <p>Try our early beta and suggest improvement's</p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  </>
  );
}

export function links () {
  return [{rel: `stylesheet`, href:homeStyles}]
}
