
import io from 'socket.io-client';
import { serverURL } from '../const';


export const users = io.connect(`${serverURL}/chat`);


export default function chatSocket() {
  const socket = io.connect(`${serverURL}/chat`);
  users.on('connect', () => {
    console.log('connect')
  });
}
