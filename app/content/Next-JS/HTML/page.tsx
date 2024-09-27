import Link from "next/link";

const HTML = () => {
  return (
    <>
      <h1 className="h1">HTML</h1>
      <Link className='Link' href="/content/Next-JS">Back</Link>
      <p>The header Tag</p>
      <p>
        It contains the title , Meta tags &amp; links to other css pages. the
        user can&apos;t see this section content except the page title
      </p>
      <h2>Important meta tags</h2>
      <code>&lt;meta charset=&quot;UTF-8&quot; /&gt;</code>
      <code>
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,
        initial-scale=1.0&quot; /&gt;
      </code>

      <p>The body tag</p>
      <p>It contains every thing the user sees</p>
      <p>it&apos;s written as tags</p>

      <h2>Forms &amp; Inputs</h2>
      <p>
        Headings: there are six headers from 1 to 6. 1 being the largest and 6
        being t smallest. h1 should be used once per page for the page header.
        h2 should be used for section headers. and so on. Example:
      </p>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <p>
        self closing tags: an empty tag with only opening tag and attributies.
        for example &apos; href , target &apos; for links and anchor (a) and br
        tags. &apos; src , alt &apos; for images.
      </p>
      <p>Order list &amp; Unorder list</p>
      <p>
        <ul>
          <li>unorder list</li>
        </ul>
        <ol>
          <li>order list</li>
        </ol>
      </p>
      <p>
        <dl>
          <dt>Description list</dt>
          <dd>Description text</dd>
        </dl>
      </p>

      <h2>Tables</h2>
      <p>
        first th for table header inide thead then tr for rows and then td for
        columns insdie tbody for more organization
      </p>

      <table>
        <thead>
          <th>Name</th>
          <th>Last name</th>
          <th>Fav Name</th>
        </thead>
      </table>
      <p>
        <address>address</address>
      </p>

      <h2>Black &amp; inline</h2>

      <h2>Header &amp; Footer</h2>

      <h2>Important attributies</h2>
      <p>_target: opne page in a new tab in the browser.</p>
      <p>alt: A text that appears in case img didn&apos;t render yet.</p>
    </>
  );
};

export default HTML;
