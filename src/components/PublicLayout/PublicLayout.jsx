import { Link } from 'react-router-dom';

const PublicLayout = () => {
  const content = (
    <section className="public">
      <header>
        <h1>Welcome to Phonebook!</h1>
      </header>
      <main>
        <p>
          Located in Beautiful Downtown Foo City, Phonebook provides a
          trained staff ready to meet your repair needs.
        </p>
        <p>&nbsp;</p>
        <address>
          Phonebook
          <br />
          555 Foo Drive
          <br />
          Foo City, CA 12345
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
      </main>
      <footer>
      </footer>
    </section>
  );
  return content;
};
export default PublicLayout;
