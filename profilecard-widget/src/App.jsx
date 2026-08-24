import ProfileCard from './ProfileCard';
import './widget.css';

export default function App() {
  const goToAbout = () => {
    window.parent.location.href = '../../about.html';
  };

  return (
    <main className="profile-widget-shell">
      <ProfileCard
        name="Mükremin Tulgar"
        title="Data Science · Financial Risk"
        handle="mukremintulgar"
        status="Portfolio"
        contactText="Contact"
        avatarUrl="./profile.jpg"
        miniAvatarUrl="./profile.jpg"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={goToAbout}
        behindGlowEnabled
        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
      />
    </main>
  );
}
