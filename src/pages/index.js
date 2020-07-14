import React from "react";

import PrimaryLayout from '../layouts/PrimaryLayout'
import Post from '../components/Post';

export default function Home() {
  return (
    <PrimaryLayout colum="col-xs-6">
      <Post title="This is our first post" excerpt="We are writing something to be displayed in out excerpt"/>
      <Post title="This is our first post" excerpt="We are writing something to be displayed in out excerpt"/>
      <Post title="This is our first post" excerpt="We are writing something to be displayed in out excerpt"/>
      <Post title="This is our first post" excerpt="We are writing something to be displayed in out excerpt"/>
    </PrimaryLayout>
  
    
  )
}
