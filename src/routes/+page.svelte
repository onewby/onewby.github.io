<script>
	import { onMount } from "svelte";
	import Logo from "./Logo.svelte";
	import Down from "./Down.svelte";
	import Section from "./Section.svelte";
	import EndSection from "./EndSection.svelte";

    /** * @type {HTMLDivElement} */
    let container
    let scrollPct = 0
    let snapScroll = false

    onMount(onResize)

    function onResize() {
        for(let element of document.getElementsByTagName("section")) {
            if(element.scrollHeight > window.innerHeight) {
                snapScroll = false;
                return;
            }
        }
        snapScroll = true;
    }
    
    function onScroll() {
        scrollPct = ((container.scrollTop / (container.scrollHeight - container.offsetHeight)) * 100)
    }

</script>

<svelte:window on:resize={onResize} />

<div class="w-full h-full text-white bg-slate-800">
    <div class="w-full h-full flex flex-col md:flex-row">
        <div class="h-1 w-scrollPct md:w-1 md:h-scrollPct bg-white md:rounded-b-full"
            class:rounded-r-full={scrollPct < 100} class:md:rounded-b-none={scrollPct >= 100}
            style="--scroll-pct: {scrollPct}%"></div>
        <nav class="p-8 md:h-full gap-4 md:gap-0 items-center md:items-start text-xl md:text-base flex flex-row md:flex-col font-medium links">
            <a href="#about" class="md:mb-8 pr-4 md:pr-0"><Logo class="h-8 w-16" /></a>
            <div><a href="#about">About</a></div>
            <div><a href="#projects">Projects</a></div>
            <div><a href="#contact">Contact</a></div>
            <div class="flex-grow"></div>
            <a href="https://github.com/onewby" class="flex-shrink-0"><img src="github-mark-white.svg" alt="GitHub" class="h-12 w-12"></a>
        </nav>
        <div class="w-full h-full overflow-scroll md:snap-y snap-mandatory prose-p:font-light" bind:this={container} on:scroll={onScroll} class:md:snap-y={snapScroll} role="main">
            <EndSection class="pt-4 md:pt-12" id="about" aria-label="About">
                <h1>Ey up!</h1>
                <p class="lead m-0">I'm Ollie, a student developer from the UK.</p>
                <p>My interests revolve around the web, networking and public transport. I have experience with Flutter, web frameworks including Svelte, WordPress, as well as Java and Python.</p>
                <div class="flex-grow"></div>
                <p class="text-center">Take a look at what I've done:</p>
                <Down class="w-12 pt-8 mx-auto animate-bounce-slow" />
            </EndSection>
            <Section id="projects" title="Bus Boards" imgSrc="bus_boards.png" imgAlt="Bus Boards website listing departures at Leuchars Rail Station">
                <p>Bus times are a pain to find. If you're not having to trawl through route numbers and timetables, you're having to deal with stance numbers and all sorts. Who knows any of that?</p>
                <p>Bus Boards experiments with presenting bus departure times in a rail-like format, integrating bus data with train data to provide a unified source for public transport departures.</p>
                <slot slot="button">
                    <a class="btn" href="https://bus.onewby.me" target="_blank" rel="noopener noreferrer">Give it a go</a>
                </slot>
            </Section>
            <Section title="Wreardle" imgSrc="wreardle.png" imgAlt="Wreardle website ready to play the first 2 seconds of a song">
                <p>Wreardle is a fun Heardle clone for guessing pro wrestling theme tunes built using SvelteKit and the SoundCloud widget API.</p>
                <slot slot="button">
                    <a class="btn" href="https://wreardle.onewby.me" target="_blank" rel="noopener noreferrer">Give it a go</a>
                </slot>
            </Section>
            <Section title="My Parliament" imgSrc="mp.png" imgAlt="Wreardle website ready to play the first 2 seconds of a song">
                <p>My Parliament was a Flutter app released in 2020 to track and be notified about the progress of bills and voting record of MPs and Lords in the UK Parliament.</p>
                <p>Originally, UK Parliament's website was poor and difficult to use, but is nowadays much improved. As a result, the app no longer sees any development.</p>
                <slot slot="button">
                    <a href='https://play.google.com/store/apps/details?id=me.onewby.myparliament&utm_source=onewby.me&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' class="h-20 mt-4 -ml-4"/></a>
                </slot>
            </Section>
            <EndSection id="contact" aria-label="Contact">
                <h2>Contact</h2>
                <p>Thanks for stopping by! If you're interested any further, here's a few links that may be useful:</p>
                <div class="flex flex-row flex-wrap gap-4">
                    <a class="btn" href="https://github.com/onewby">GitHub</a>
                    <a class="btn" href="mailto:hello@onewby.me">Email</a>
                </div>
                <div class="flex-grow"></div>
                <p class="text-sm">Copyright © 2023 Oliver Newby. All Rights Reserved. Google Play and the Google Play logo are trademarks of Google LLC.</p>
            </EndSection>
        </div>
    </div>
</div>

<style lang="postcss">
    /** https://stackoverflow.com/a/41061131 */
    .btn {
        background-size: 200% 100%;
        background-position: 100% 0; 
        background-image: linear-gradient(to right, rgb(30 41 59) 50%, white 50%),
                            linear-gradient(to right, white 50%, transparent 50%);
        transition: background-position 900ms ease-in-out; 
        -webkit-background-clip: text, border-box;
        background-clip: text, border-box; 
        @apply block w-fit px-4 py-2 font-light border-2 border-white rounded text-transparent;
    }

    .btn:hover { 
        background-position: 0 0; 
    }

    .links a:hover {
        text-decoration: underline;
    }
</style>

<svelte:head>
    <title>Oliver Newby</title>
</svelte:head>