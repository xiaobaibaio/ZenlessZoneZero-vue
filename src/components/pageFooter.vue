<template>
  <div class="footer fiee">
    <div class="footer_wrap">
      <ul class="img_ul">
        <li v-for="item in followUs" :key="item.id">
          <a href="" @mouseenter="hoveredId = item.id" @mouseleave="hoveredId = null">
            <img :src="hoveredId === item.id ? item.img : item.imgs" />
          </a>
        </li>
      </ul>
    </div>
    <div>
      <div class="cn_footer">
        <div class="footer_content">
          <div class="footer_logo">
            <img
              src="/src/assets/尾/f7dcd7ce5ff481132db0e8e5588ea41c_1058604956605839480.png"
              alt=""
            />
            <span></span>
            <img
              class="game-logo"
              src="/src/assets/尾/af9fd2ec764d0af9c63b9762e6b32ef0_77819233022176362.png"
              alt=""
            />
          </div>
          <div class="footer-info">
            <div class="footer-link">
              <ul>
                <li v-for="item in agreementList" :key="item.id">
                  <a href="">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="footer-advice">
              <p>
                健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。
              </p>
              <div>
                <a href="">沪公网安备31010402001113号</a>
                <span class="line_between">|</span>
                <span>增值电信业务经营许可证：沪B2-20190555</span>
              </div>
              <div>
                <a href="">沪ICP备19018275号-4</a>
                <span class="line_between">|</span>
                <span>沪网文〔2022〕1334-052号 </span>
                <span class="line_between">|</span>
                <span>国新出审【2023】1809号</span>
              </div>
              <p>
                互联网违法不良信息举报邮箱: tousu@service.mihoyo.com 互联网违法不良信息举报电话:
                021-60371750 （工作时间：每天10点 - 20点）
              </p>
              <p>
                亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听
              </p>
              <p>未成年成长关爱热线：021-60371740 （服务时间：8:00-23:00）</p>
              <span>© 2022 米哈游版权所有 | 上海米哈游影铁科技有限公司</span>
              <span class="line_between">客服电话：400-666-6312</span>
            </div>
            <div class="footer-icon">
              <div v-for="item in footerIconList" :key="item.id">
                <a href=""><img :src="item.img" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const followUs = ref([
  { id: 1, img: '/src/assets/视频号/wx.png', imgs: '/src/assets/视频号/wx-1.png' },
  { id: 2, img: '/src/assets/视频号/wbo.png', imgs: '/src/assets/视频号/wbo-1.png' },
  { id: 3, img: '/src/assets/视频号/miyou.png', imgs: '/src/assets/视频号/miyou-1.png' },
  { id: 4, img: '/src/assets/视频号/bilbil.png', imgs: '/src/assets/视频号/bilbil-1.png' },
  { id: 5, img: '/src/assets/视频号/tap.png', imgs: '/src/assets/视频号/tap-1.png' },
  { id: 6, img: '/src/assets/视频号/link.png', imgs: '/src/assets/视频号/link-1.png' }
])

const agreementList = ref([
  { id: 1, name: '用户协议', url: '#' },
  { id: 2, name: '隐私政策', url: '#' },
  { id: 3, name: '儿童隐私政策', url: '#' },
  { id: 4, name: '自律公约', url: '#' },
  { id: 5, name: '成长关爱', url: '#' },
  { id: 6, name: '联系我们', url: '#' },
  { id: 7, name: '加入我们', url: '#' }
])

const footerIconList = ref([
  { id: 1, img: '/src/assets/尾/公示/culture_1575020039_5478.png' },
  { id: 2, img: '/src/assets/尾/公示/e110_1575020039_7486.png' },
  { id: 3, img: '/src/assets/尾/公示/jubao_1575020039_5071.png' },
  { id: 4, img: '/src/assets/尾/公示/shiming_1575020038_4113.png' },
  { id: 5, img: '/src/assets/尾/公示/youhai_1589857356_1416.png' },
  { id: 6, img: '/src/assets/尾/公示/zhizhao_1575020039_4362.png' }
])
const hoveredId = ref(null)
</script>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  background: #000;
  .footer_wrap {
    width: 100%;
    background: #111;
    display: flex;
    justify-content: center;
    ul {
      width: 19.2rem;
      height: 1.14rem;
      display: flex;
      justify-content: right;
      align-items: center;
      li {
        width: 0.85rem;
        margin-right: 0.36rem;
      }
    }
  }
  .cn_footer {
    background: #000;
    padding: 0.54rem 0;
    display: flex;
    justify-content: center;
    .footer_content {
      width: 19.2rem;
      display: flex;
      align-items: center;
      .footer_logo {
        display: flex;
        align-items: center;
        .game-logo {
          width: 1.96rem;
          height: auto;
        }
      }
      .footer_logo > img {
        height: 0.75rem;
        object-fit: contain;
      }
      .footer_logo > span {
        width: 1px;
        height: 0.24rem;
        background: #666;
        margin-left: 0.22rem;
        margin-right: 0.22rem;
      }
      .footer-info {
        margin-left: 1.07rem;
        line-height: 0.42rem;
        font-size: 0.2rem;
        color: #aaa;
        .footer-link {
          font-size: 0.22rem;
          margin-bottom: 0.5rem;
          ul {
            display: flex;
            li {
              margin-right: 4px;
              a {
                color: #fff;
              }
              a:hover {
                text-decoration: underline;
              }
            }
            li::after {
              content: '|';
              margin-left: 5px;
              color: #fff;
            }
          }
        }
        .footer-advice {
          line-height: 1.5;
          a {
            color: #aaa;
          }
          a:hover {
            text-decoration: underline;
          }
          span,
          p {
            cursor: default;
          }
          span,
          p,
          a {
            user-select: none;
          }
          .line_between {
            margin-left: 0.18rem;
            margin-right: 0.18rem;
          }
        }
        .footer-icon {
          display: flex;
          padding: 10px 0;
          img {
            width: 116px;
            height: 46px;
            margin-right: 15px;
          }
        }
      }
    }
  }
}
</style>
