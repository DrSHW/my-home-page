<script lang="ts" setup>
import { defineProps, PropType } from "vue";
const props = defineProps({
    avatar_url: {
        type: String as PropType<string>,
        required: true,
    },
    href: {
        type: String as PropType<string>,
        required: true,
    },
    name: {
        type: String as PropType<string>,
        required: true,
    },
    description: {
        type: String as PropType<string>,
        required: true,
    },
});
const redirect = () => {
    window.open(props.href);
};
</script>

<template>
    <div class="container" @click="redirect">
        <div class="profile">
            <div class="avatar"><img :src=avatar_url alt="" /></div>
            <div>
                <div class="name">{{ name }}</div>
                <div class="description">{{ description }}</div>
            </div>
        </div>
    </div>

</template>


<style lang="scss">
@keyframes light {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@media (max-width: 768px) {
    .container {
    position: relative;
    width: 25vh;
    height: 32vh;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    filter: brightness(0.8);
}

.container::before {
    content: '';
    position: absolute;
    width: 50vh;
    height: 50vh;
    background-image: conic-gradient(transparent, transparent, transparent, #00ccff);
    animation: light 3s linear infinite;
}

.container::after {
    content: '';
    position: absolute;
    width: 50vh;
    height: 50vh;
    background-image: conic-gradient(transparent, transparent, transparent, rgb(248, 235, 92));
    animation: light 3s linear infinite;
    animation-delay: 1.5s;
}

.profile {
    position: absolute;
    inset: 5px;
    border-radius: 16px;
    background: rgb(31,34,42);
    z-index: 1;
    color: white;


    .avatar {
        background-color: aliceblue;
        margin-top: 2px;
        border-radius: 16px;        
        display: flex;
        height: 60%;
        justify-content: center;
        align-items: center;
    }
    img {
        // 压缩铺满
        width: 80%;
    }
    .name {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        margin-top: 1vh;
    }
    .description {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        padding: 0 3vh;
        margin: 1vh 0;
    }
}
}

@media (min-width: 768px) {
.container {
    position: relative;
    width: 25vh;
    height: 32vh;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    filter: brightness(0.8);
}

.container::before {
    content: '';
    position: absolute;
    width: 50vh;
    height: 50vh;
    background-image: conic-gradient(transparent, transparent, transparent, #00ccff);
    animation: light 3s linear infinite;
}

.container::after {
    content: '';
    position: absolute;
    width: 50vh;
    height: 50vh;
    background-image: conic-gradient(transparent, transparent, transparent, rgb(248, 235, 92));
    animation: light 3s linear infinite;
    animation-delay: 1.5s;
}

.profile {
    position: absolute;
    inset: 5px;
    border-radius: 16px;
    background: rgb(31,34,42);
    z-index: 1;
    color: white;


    .avatar {
        background-color: aliceblue;
        margin-top: 2px;
        border-radius: 16px;        
        display: flex;
        height: 60%;
        justify-content: center;
        align-items: center;
    }
    img {
        // 压缩铺满
        width: 80%;
    }
    .name {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        margin-top: 1vh;
    }
    .description {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        padding: 0 3vh;
        margin: 1vh 0;
    }
}
}
  


</style>