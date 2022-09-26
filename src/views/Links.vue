<script setup lang="ts">
import Card from "../components/FriendCard.vue";
const back = () => { 
    window.history.back();
}
</script>

<template>
    <div class="exit" @click="back">
        <svg viewBox="0 0 1024 1024" 
				aria-hidden="true"
				focusable="false"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				height="1.2em"
				width="1.2em"><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="currentColor" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></svg>
    </div>
    <div class="welcome">
        --&nbsp;朋友们&nbsp;--
    </div>
    <div class="card-area">
        <Card class="item" avatar_url="https://images.drshw.tech/images/notes/LsyLogo去背景.png"
            href="https://lsyfighting.cn/" name="1_sy"
            description="早睡早起，少想多做" />

        <Card class="item" avatar_url="https://images.drshw.tech/images/notes/dustella.jpg"
            href="https://dustella.net" name="Dustella"
            description="喜欢睡大觉的前端&运维魔法师" />
    </div>

</template>

<style lang="scss" scoped>
.exit {
    position: absolute;
    top: 2vh;
    left: 2vh;
    margin: 1em;
    z-index: 11;
    cursor: pointer;
    color: aliceblue;
    font-size: 4vh;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
    }
}
.welcome {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    font-size: 5rem;
    color: transparent;
    text-shadow:
        0px 0px 1px rgba(255, 255, 255, .9),
        0px 4px 4px rgba(0, 0, 0, .05);
    letter-spacing: .2rem;
    margin-top: 5vh;
}

.card-area {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5vh;
    width: 100vh;
    gap: 8vh;
}

.item {
    z-index: 11;

    :hover {
        // 上移
        filter: brightness(1.2);
        cursor: pointer;
    }
}
</style>