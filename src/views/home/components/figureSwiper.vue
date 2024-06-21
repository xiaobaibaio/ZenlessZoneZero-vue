<template>
  <div class="fill_name fill font-mun">{{ nameWrite }}</div>
  <div class="chome-character__main__ul fill">
    <!-- 按钮 -->
    <div class="chome-character__main__but fill">
      <div class="chome-character__main__left fill" @click="butLeft"></div>
      <div class="chome-character__main__right fill" @click="butRight"></div>
    </div>
    <!-- 人物列表 -->
    <div class="chome-character_ov">
      <div class="chome-character__main__ul ul">
        <div
          class="chome-character__main__ol fiee"
          v-for="item in role"
          :key="item.id"
          :id="item.id"
          @click="characterClick(item.id)"
          @mouseover="characterMouseEnter(item.id)"
          @mouseleave="characterMouseLeave"
          ref="chome_character__main__ol"
        >
          <img class="" :src="item.label" alt="" />
          <div class="fill" v-show="roleTrue[item.id] || hoverRoleId === item.id"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="home-character__swiper fill">
    <div class="swiper-wrapper fill">
      <div
        class="swiper-wrapper__item fill"
        v-for="item in role"
        :key="item.id"
        :id="`figure-${item.id}`"
      >
        <div class="swiper-wrapper__figure fill">
          <img :src="item.role" alt="" />
        </div>
        <div class="swiper-wrapper__item__organization fill">
          <img :src="item.img" alt="" />
        </div>
        <div class="swiper-wrapper__item__characters fill font-hongmeng">
          <div>
            <span>{{ item.organization }}</span>
          </div>
          <div class="designation">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
const nameWrite = ref()
const role = ref([
  {
    id: 1,
    role: '/src/assets/人物/朱鸢-大.png',
    label: '/src/assets/人物/朱鸢-小.png',
    img: '/src/assets/人物/组织/刑侦特勤组.png',
    name: '朱鸢',
    organization: '刑侦特勤组',
    nameWrite: 'ZHUYUAN'
  },
  {
    id: 2,
    role: '/src/assets/人物/艾莲-大.png',
    label: '/src/assets/人物/艾莲-小.png',
    img: '/src/assets/人物/组织/维多利亚家政.png',
    name: '艾莲-乔',
    organization: '维多利亚家政',
    nameWrite: 'Ellen Joe'
  },
  {
    id: 3,
    role: '/src/assets/人物/亚历山德丽娜·-大.png',
    label: '/src/assets/人物/亚历山德丽娜·-小.png',
    img: '/src/assets/人物/组织/维多利亚家政.png',
    name: '亚历山德丽娜-莎芭丝缇安',
    organization: '维多利亚家政',
    nameWrite: 'Alexandrina Sebastiane'
  },
  {
    id: 4,
    role: '/src/assets/人物/格莉丝-大.png',
    label: '/src/assets/人物/格莉丝-小.png',
    img: '/src/assets/人物/组织/白祇重工.png',
    name: '格莉丝-霍华德',
    organization: '白祇重工',
    nameWrite: 'Grace Howard'
  },
  {
    id: 5,
    role: '/src/assets/人物/星见雅-大.png',
    label: '/src/assets/人物/星见雅-小.png',
    img: '/src/assets/人物/组织/H.S.O.S.6.png',
    name: '星见雅',
    organization: 'H.S.O.S.6',
    nameWrite: 'MIYABI'
  },
  {
    id: 6,
    role: '/src/assets/人物/苍角-大.png',
    label: '/src/assets/人物/苍角-小.png',
    img: '/src/assets/人物/组织/H.S.O.S.6.png',
    name: '苍角',
    organization: 'H.S.O.S.6',
    nameWrite: 'SOUKAKU'
  },
  {
    id: 7,
    role: '/src/assets/人物/本-大.png',
    label: '/src/assets/人物/本-小.png',
    img: '/src/assets/人物/组织/白祇重工.png',
    name: '本-比格',
    organization: '白祇重工',
    nameWrite: 'BEN'
  },
  {
    id: 8,
    role: '/src/assets/人物/安东-大.png',
    label: '/src/assets/人物/安东-小.png',
    img: '/src/assets/人物/组织/白祇重工.png',
    name: '安东-伊万诺夫',
    organization: '白祇重工',
    nameWrite: 'ANTON'
  },
  {
    id: 9,
    role: '/src/assets/人物/珂蕾妲-大.png',
    label: '/src/assets/人物/珂蕾妲-小.png',
    img: '/src/assets/人物/组织/白祇重工.png',
    name: '珂蕾妲-贝洛伯格',
    organization: '白祇重工',
    nameWrite: 'KOLEDA'
  },
  {
    id: 10,
    role: '/src/assets/人物/冯-大.png',
    label: '/src/assets/人物/冯-小.png',
    img: '/src/assets/人物/组织/维多利亚家政.png',
    name: '冯-莱卡恩',
    organization: '维多利亚家政',
    nameWrite: 'LYCAON'
  },
  {
    id: 11,
    role: '/src/assets/人物/可琳-大.png',
    label: '/src/assets/人物/可琳-小.png',
    img: '/src/assets/人物/组织/维多利亚家政.png',
    name: '可琳-威克斯',
    organization: '维多利亚家政',
    nameWrite: 'CORIN'
  },
  {
    id: 12,
    role: '/src/assets/人物/猫宫又奈-大.png',
    label: '/src/assets/人物/猫宫又奈-小.png',
    img: '/src/assets/人物/组织/狡兔屋.png',
    name: '猫宫又奈',
    organization: '狡兔屋',
    nameWrite: 'NEKO'
  },

  {
    id: 13,
    role: '/src/assets/人物/11号-大.png',
    label: '/src/assets/人物/11号-小.png',
    img: '/src/assets/人物/组织/奥波勒斯小队.png',
    name: '11号',
    organization: '奥波勒斯小队',
    nameWrite: 'ELEVEN'
  },
  {
    id: 14,
    role: '/src/assets/人物/比利·奇德-大.png',
    label: '/src/assets/人物/比利·奇德-小.png',
    img: '/src/assets/人物/组织/狡兔屋.png',
    name: '比利·奇德',
    organization: '狡兔屋',
    nameWrite: 'BILLY'
  },
  {
    id: 15,
    role: '/src/assets/人物/妮可·德玛拉-大.png',
    label: '/src/assets/人物/妮可·德玛拉-小.png',
    img: '/src/assets/人物/组织/狡兔屋.png',
    name: '妮可·德玛拉',
    organization: '狡兔屋',
    nameWrite: 'NICOLE'
  },
  {
    id: 16,
    role: '/src/assets/人物/安比·德玛拉-大.png',
    label: '/src/assets/人物/安比·德玛拉-小.png',
    img: '/src/assets/人物/组织/狡兔屋.png',
    name: '安比·德玛拉',
    organization: '狡兔屋',
    nameWrite: 'ANBY'
  }
])

// 当前显示角色的 ID
const currentRoleId = ref(1)
//旧角色ID
let prevRoleId = ref(1)
//临时悬停角色ID
const hoverRoleId = ref(null)

// 初始化 roleTrue 对象，默认显示 id 为 1 的角色
const roleTrue = ref({})
role.value.forEach((item) => {
  roleTrue.value[item.id] = item.id === 1
  nameWrite.value = role.value[0].nameWrite
})

const showOnly = (id) => {
  roleTrue.value = Object.assign(
    {},
    ...Object.keys(roleTrue.value).map((key) => ({
      [key]: parseInt(key) === id
    }))
  )
}

//鼠标悬浮时将鼠标位置上的id改为true
const characterMouseEnter = (id) => {
  hoverRoleId.value = id
}

// 鼠标离开事件处理函数
const characterMouseLeave = () => {
  // 恢复 roleTrue 对象为当前选择的角色
  hoverRoleId.value = null
}
//点击动画
const clickAnimation = (prevRoleId, id) => {
  let finishId = prevRoleId
  const finish = document.getElementById(`figure-${finishId}`)
  quit(finish)
  beginAnimation(id)
}

//移动动画
const nameWriteAnimation = () => {
  gsap.fromTo(
    '.fill_name',
    {
      x: 40,
      opacity: 0
    },
    { x: 0, opacity: 1, duration: 1, ease: 'power1.inOut' }
  )
}
// 左点击动画
const LeftAnimation = (id) => {
  let finishId = id + 1
  if (finishId > role.value.length) {
    finishId = 1
  }
  const finish = document.getElementById(`figure-${finishId}`)
  quit(finish)
  beginAnimation(id)
  nameWriteAnimation()
}
// 右点击动画
const RightAnimation = (id) => {
  let finishId = id - 1
  if (finishId < 1) {
    finishId = role.value.length
  }
  const finish = document.getElementById(`figure-${finishId}`)
  quit(finish)
  beginAnimation(id)
  nameWriteAnimation()
}
const quit = (finish) => {
  gsap.fromTo(
    finish,
    {
      x: 0
    },
    {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut'
    }
  )
}

// 进入动画
const beginAnimation = (id) => {
  const begin = document.getElementById(`figure-${id}`)
  gsap.fromTo(
    begin,
    {
      x: 100,
      opacity: 0
    },
    { x: 0, opacity: 1, duration: 1, ease: 'power1.inOut' }
  )
}

let newId = 0
const chome_character__main__ol = ref()
const width = ref()
//更新nameWrite
const updateNameWrite = (id) => {
  const selectedRole = role.value.find((item) => item.id === id)
  if (selectedRole) {
    nameWrite.value = selectedRole.nameWrite
  }
}

//点击后在更新角色ID
const characterClick = (id) => {
  if (id === currentRoleId.value) return // 防止重复点击相同角色
  prevRoleId.value = currentRoleId.value
  currentRoleId.value = id
  updateNameWrite(id)
  showOnly(id)
  // 添加点击动画
  clickAnimation(prevRoleId.value, id)
}

// 左边
const butLeft = () => {
  newId = currentRoleId.value - 1
  if (newId < 1) {
    newId = role.value.length
  }
  currentRoleId.value = newId
  updateNameWrite(newId)
  showOnly(newId)
  const X =
    currentRoleId.value == 1
      ? -width.value * (currentRoleId.value - 1)
      : currentRoleId.value == 2
        ? -width.value * (currentRoleId.value - 2)
        : -width.value * (currentRoleId.value - 3)

  // 使用 GSAP 平滑滚动
  gsap.to('.ul', { x: X, duration: 0.5 })
  // 传入当前角色ID
  LeftAnimation(currentRoleId.value)
}

// 右边按钮点击事件处理函数
const butRight = () => {
  newId = currentRoleId.value + 1
  if (newId > role.value.length) {
    newId = 1
  }
  currentRoleId.value = newId
  updateNameWrite(newId)
  showOnly(newId)
  // 当角色ID大于3时，执行动画
  const X = currentRoleId.value > 3 ? -width.value * (currentRoleId.value - 3) : 0
  // 使用 GSAP 平滑滚动
  gsap.to('.ul', { x: X, duration: 0.5, onComplete: checkReset })
  // 传入当前角色ID
  RightAnimation(currentRoleId.value)
}

const checkReset = () => {
  // 如果当前角色 ID 大于角色列表的长度，则重置位置
  if (currentRoleId.value > role.value.length) {
    gsap.to('.ul', { x: 0, duration: 0 })
  }
}
onMounted(() => {
  checkReset,
    updateNameWrite,
    nextTick(() => {
      if (chome_character__main__ol.value[1]) {
        // 确保 ref 引用的 DOM 元素存在后再访问其属性
        width.value = chome_character__main__ol.value[1].offsetWidth
        console.log(chome_character__main__ol.value[1].offsetWidth)
      } else {
        console.error('chome_character__main__ol.value[1] is undefined')
      }
    })
})
</script>

<style lang="scss" scoped>
.fill_name {
  width: 14.38rem;
  height: 7.22rem;
  font-size: 7.22rem;
  font-weight: bold;
  overflow: hidden;
  z-index: 1;
  top: -5rem;
  left: -5rem;
  color: rgba(239, 239, 239, 0.1);
}
.chome-character__main__ul {
  width: 6.64rem;
  height: 0.76rem;
  border-radius: 0.38rem;
  background-color: #222122;
  display: flex;
  align-items: center;
  bottom: 0.4rem;
  left: 0.38rem;
  z-index: 10;
  .chome-character__main__but {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      width: 0.84rem;
      height: 0.6rem;
      background-image: url('../../../assets/人物/边/下载 (11).png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      z-index: 11;
      cursor: pointer;
    }
    div:hover {
      transition: transform 300ms;
    }
    .chome-character__main__right {
      transform: rotate(180deg);
      right: 0.08rem;
    }
    .chome-character__main__right:hover {
      transform: scale(1.12) rotate(180deg);
    }
    .chome-character__main__left:hover {
      transform: scale(1.12);
    }
    .chome-character__main__left {
      left: 0.08rem;
    }
  }
  .chome-character_ov {
    width: 75%;
    height: 100%;
    margin: 0 0.88rem;
    overflow: hidden;
    .chome-character__main__ul {
      width: 100%;
      height: 100%;
      .chome-character__main__ol {
        min-width: 1.6rem;
        height: 0.6rem;
        background-color: #222122;
        cursor: pointer;
        div {
          width: 100%;
          height: 100%;
          background-image: url('../../../assets/人物/边/下载 (10).png');
          background-size: 100% 100%;
          top: -0.01rem;
        }
      }
    }
  }
}
.home-character__swiper {
  width: 17.44rem;
  height: 12.53rem;
  bottom: 0;
  z-index: 5;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .swiper-wrapper__item:first-child {
      opacity: 1;
    }
    .swiper-wrapper__item {
      width: 20.6rem;
      height: 100%;
      bottom: 0;
      opacity: 0;
      .swiper-wrapper__figure {
        width: 18.05rem;
        height: 12.53rem;
        z-index: 5;
      }
      .swiper-wrapper__item__organization {
        width: 9rem;
        height: 7.13rem;
        right: 0;
        top: 4.67rem;
        left: 11.3rem;
        z-index: 4;
        img {
          height: auto;
          object-fit: cover;
        }
      }
      .swiper-wrapper__item__characters {
        width: 5.2rem;
        padding-top: 1.95rem;
        height: 7.86rem;
        right: 2rem;
        top: 4.67rem;
        text-align: right;
        z-index: 12;
        div {
          font-size: 0.42rem;
          font-weight: bolder;
          color: #222122;
        }
        .designation {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
