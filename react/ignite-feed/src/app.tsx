import cover from './assets/cover.png';
import avatar from './assets/profile.jpeg';
import { Header } from "./components/header";
import { Posts } from "./components/posts";
import { Profile } from "./components/profile";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 gap-8 flex flex-col justify-start overflow-x-hidden">
      <Header />
      <div className="w-[1120px] m-auto gap-8 flex mb-8 max-lg:flex-col max-lg:items-center max-lg:mx-5 max-lg:w-fit">
        <Profile 
          name="Italo F. C. Pussi"
          role="Security Analyst"
          cover={cover}
          avatarUrl={avatar}
        />
        <Posts />
      </div>
    </div>
  )
}