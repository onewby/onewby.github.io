<script lang="ts">
     export let title: string;
     export let imgSrc: string;
     export let imgAlt: string;
</script>

<section class="w-full min-h-navHeight md:min-h-screen py-12 px-16 snap-start prose prose-2xl prose-invert flex flex-col lg:flex-row" aria-label={title} {...$$restProps}>
    <div>
        <h2>{title}</h2>
        <p>
            <slot></slot>
        </p>
        <slot name="button"></slot>
    </div>
    <div class="object-contain lg:pl-12 mt-8 lg:mt-0 self-center md:self-start">
        <img src={imgSrc} alt={imgAlt} class="rounded border-2 border-white max-w-xs">
    </div>
</section>