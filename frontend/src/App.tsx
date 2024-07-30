import './App.css'
import AppBar from './components/AppBar';
import NewsContainer from './components/NewsConatiner';

const news = [{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},
{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
}
,{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
},{
  imageUrl: "https://www.cnet.com/a/img/resize/37af2acae2a44813379ed96db10ccff787316044/hub/2024/07/24/51d5289b-098c-4816-8cc2-6157484f2185/house-of-the-dragon.jpg?auto=webp&fit=crop&height=675&width=1200",
  title: "What Should You Stream This Week? Watch These Releases on Max, Netflix and More",
  description: "This week on streaming, it goes without saying that Peacock's Olympics coverage continues this week with comprehensive coverage of every sporting event, plus original commentary shows"
}];

function App() {
  return (
    <>
      <AppBar />
      <NewsContainer 
        topNews={news}/>
    </>
  );
}

export default App
