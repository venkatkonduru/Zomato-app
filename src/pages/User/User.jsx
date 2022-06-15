import css from './User.module.css'

import Navbar from '../../components/NavigationBar2/NavigationBar2'
import UserHero from '../../utils/UserHero/UserHero'

import LeftSideCardPanel from '../../utils/LeftSideCardPanel/LeftSideCardPanel'
import SuggestedFollowCard from '../../utils/SuggestedFollowCard/SuggestedFollowCard'
import ProfileWidget from '../../utils/ProfileWidget/ProfileWidget'

import userImg from '../../../public/images/koushil.jpg';

const User = () => {

    let data1 = [ 
        {title: "Reviews", hash: "reviews"},
        {title: "Photos", hash: "photos"},
        {title: "Followers", hash: "followers"},
        {title: "Recently Viewed", hash: "recently-viewed"},
        {title: "Bookmarks", hash: "bookmarks"},
        {title: "Blog Posts", hash: "blog-posts"}
    ];
    let data2 = [ 
        {title: "Order History", hash: "order-history"},
        {title: "My Address", hash: "my-address"},
        {title: "Favorite Orders", hash: "favorite-orders"},
    ];

    let data3 = [
        {userId: 123, imgSrc:userImg, userName: "Koushil Mankali", reviews: 200, followers: "123"},
        {userId: 123, imgSrc:userImg, userName: "Koushil Mankali", reviews: 200, followers: "123"},
        {userId: 123, imgSrc:userImg, userName: "Koushil Mankali", reviews: 200, followers: "123"},
        {userId: 123, imgSrc:userImg, userName: "Koushil Mankali", reviews: 200, followers: "123"}
    ]

    let data4 = {
      profilePic: userImg,
      userName: "Koushil",
      reviews: 1,
      photos: 1,
      followers: 200
    }

  return (<div className={css.outerDiv}>
    <div className={css.navbar}>
      <Navbar />
    </div>
    <div className={css.box}>
      <UserHero />
      <div className={css.mainbody}>
        <div className={css.leftBox}>
          <LeftSideCardPanel name='ACTIVITY' data={data1} />
          <LeftSideCardPanel name='ONLINE ORDERING' data={data2} />
          <SuggestedFollowCard name='SUGGESTED FOODIES TO FOLLOW' data={data3} />
          <ProfileWidget name='ZOMATO PROFILE WIDGET' tag="Showcase your Zomato profile on your blog." data={data4} />
        </div>
        <div className={css.rightBox}>hello</div>
      </div>
    </div>
  </div>)
}

export default User