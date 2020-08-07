import React from 'react';
import './tweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/03/avatar-publicity_still-h_2019.jpg' />
          <input placeholder="What's happenning?" type='text' />
        </div>
        <Button className='tweetsBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
