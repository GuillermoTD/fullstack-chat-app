import "./App.css";
import ChannelContainer from "./components/ChannelContainer";
import ChannelListContainer from "./components/ChannelListContainer";
import { Chat } from "stream-chat";
import {StreamChat} from "stream-chat"
import Cookies from "universal-cookie"
const apiKey = "zegs3cmkn2yd"
const client = StreamChat.getInstance(apiKey)
function App() {
  return (
    <div className="App">
      hola
      <Chat client={client} theme="team light">
        <ChannelContainer />
        <ChannelListContainer />
      </Chat>
    </div>
  );
}

export default App;
