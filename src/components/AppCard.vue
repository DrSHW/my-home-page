<script lang="ts" setup>
import { defineProps, PropType } from "vue";
const props = defineProps({
	href: {
		type: String as PropType<string>,
		required: false,
	},
	title: {
		type: String as PropType<string>,
		required: true,
	},
	body: {
		type: String as PropType<string>,
		required: true,
	},
});
</script>

<template>
	<li class="link-card">
		<a :href=href>
			<h2>
				<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img"
					xmlns="http://www.w3.org/2000/svg" height="1.2em" width="1.2em">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
					</path>
				</svg>

				{{ title }}
				<span>&rarr;</span>
			</h2>
			<p>
				{{ body }}
			</p>
		</a>
	</li>
</template>

<style>
:root {
	--color-border: hsl(17, 24%, 90%);
	--link-gradient: linear-gradient(45deg, #4f39fa, #da62c4 30%, var(--color-border) 60%);
}

@media (max-width: 768px) {
	h2 {
		margin-top: 2vh;
		font-size: 2.2vh;
	}
	p {
	margin-top: 1.5rem;
	margin-left: 2vw;
	margin-right: 2vw;
	margin-bottom: 0;
}
}

@media (min-width: 768px) {
	h2 {
		margin-top: 2vh;
		margin-left: 2vh;
		font-size: 3vh;
	}
	p {
	margin-top: 3vh;
	margin-left: 2vh;
	margin-right: 2vh;
	margin-bottom: 0;
}
}

.link-card {
	z-index: 20;
	list-style: none;
	display: flex;
	padding: 0.15rem;
	background-image: var(--link-gradient);
	background-size: 400%;
	border-radius: 0.5rem;
	background-position: 100%;
	transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.link-card>a {
	width: 100%;
	text-decoration: none;
	line-height: 1.4;
	border-radius: 0.35rem;
	color: var(--text-color);
	background-color: white;
	opacity: 0.8;
}

h2 {
	transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}



h2 span {
	display: inline-block;
	transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.link-card:is(:hover, :focus-within) {
	background-position: 0;
}

.link-card:is(:hover, :focus-within) h2 {
	color: #4f39fa;
}

.link-card:is(:hover, :focus-within) h2 span {
	will-change: transform;
	transform: translateX(2px);
}
</style>