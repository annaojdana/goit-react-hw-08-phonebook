
import styles from './PublicLayout.module.css';
import myPhoto from './anna_ojdana_profile.jpg';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const PublicLayout = () => {
  const { heading, description, presentation, photo } = styles;

  const content = (
    <section className="public">
      <h1 className={heading}>Welcome to my Phonebook App</h1>
      <p className={description}>
        This app was made during my learning react and redux. It allows you to
        register and keep your contacts.
      </p>

      <div className={presentation}>
        <div>
          <img
            className={photo}
            src={myPhoto}
            alt="The creator of the application"
          />
        </div>
        <div>
          <p className={description}>
            Hi, my name is Ania and I'm a Junior React Developer
          </p>
          <p> Contact: </p>
          <a href="https://www.linkedin.com/in/anna-ojdana/">
            <IoLogoLinkedin />
          </a>
          <a href="https://github.com/annaojdana/goit-react-hw-08-phonebook">
            <IoLogoGithub />
          </a>
        </div>
      </div>

      <footer></footer>
    </section>
  );
  return content;
};
export default PublicLayout;
