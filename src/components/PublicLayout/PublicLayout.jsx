import styles from './PublicLayout.module.css';
import myPhoto from './anna_ojdana_profile.jpg';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const PublicLayout = () => {
  const { heading, description, presentation, photo, linkedin, github, info } =
    styles;

  const content = (
    <section className="public">
      <h1 className={heading}>Welcome to my Phonebook App</h1>
      <p className={description}>
        This app was made during my learning react and redux. It allows you to
        register and keep your contacts.
        <a
          className={github}
          href="https://github.com/annaojdana/goit-react-hw-08-phonebook"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub />
          Application code
        </a>
      </p>

      <div className={presentation}>
        <div>
          <a
            className={linkedin}
            href="https://www.linkedin.com/in/anna-ojdana/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin />
            <img
              className={photo}
              src={myPhoto}
              alt="The creator of the application"
            />
          </a>
        </div>
        <div className={info}>
          <p className={description}>
            Hi, my name is Ania and I'm a Junior React Developer
          </p>
        </div>
      </div>
    </section>
  );
  return content;
};
export default PublicLayout;
