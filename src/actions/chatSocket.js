
import io from 'socket.io-client';
import { serverURL } from '../const';


export const users = io.connect(`${serverURL}/chat`);


export default function chatSocket() {
  users.on('connect', () => {
    console.log('connect'); // FIXME: loginout => close
  });
}
