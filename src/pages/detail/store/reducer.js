import { fromJS } from 'immutable';
const defaultState = fromJS({
  title: "塑料姐妹情：防火防盗防闺蜜！",
  content: `<img src="https://upload-images.jianshu.io/upload_images/10883966-e8284d4851d682b8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp" alt=" " />
<p>有句玩笑话叫“防火防盗防闺蜜”，但是最近常州女子钱某就遭遇了这样的窝心事，家里的5800元现金和首饰，竟然被自己的闺蜜偷走了。</p>
<p>当天晚上7点多，常州公安局小河派出所接到女子钱某报警称，家里来了个小偷，被她朋友逮了个正着，民警立即赶往现场。</p>
<p>钱某表示，自己当天晚上值夜班，突然接到朋友李某的电话，说家里的灯亮着，猜想，可能遭了贼，立马赶回家里，谁知，门一打开，看到的竟然是自己的闺蜜章某。面对民警的询问，章某始终不承认自己偷了闺蜜的东西，还演起了戏。</p>
<p>无奈之下，民警将两人带到派出所进一步调查，这下，章某才承认，那些东西确实是自己偷的，据她交待，得知闺蜜当天晚上要值夜班不在家，就在前一天偷拿了钱某家门钥匙，当晚趁着没人的时候，偷偷进入钱某家中，并拿走了5800元现金，及几件首饰，之后便带回了自己的暂住地。</p>`
})

export default (state = defaultState, action) => {
  
  return state;
}