import { Component } from 'react';
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

class App extends Component {
  static defaultProps = { isLoggedIn: false, logOut: () => {} };

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const key = event && typeof event.key === 'string' ? event.key.toLowerCase() : '';
    const isCtrlPressed = !!(event && event.ctrlKey);
    if (isCtrlPressed && key === 'h') {
      if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
      }
      window.alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="min-h-screen flex flex-col">
        <Notifications notifications={notificationsList} displayDrawer={false} />
        <div className="flex-1 flex flex-col items-center gap-6 px-4 sm:px-8 lg:px-12 mt-4">
          <Header />
          {
            !isLoggedIn ? (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList courses={coursesList} />
              </BodySectionWithMarginBottom>
            )
          }
          <BodySection title="News from the School">
            <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
              ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis
              fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta.
              Recusandae, quia dicta?
            </p>
          </BodySection>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
