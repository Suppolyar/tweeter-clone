<template>
    <aside class="h-screen flex flex-col">
        <div class="p-2 m-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="h-8 w-8">
                    <LogoTwitter />
                </div>
            </nuxt-link>
        </div>

        <div class="space-y-3 mt-2">
            <SidebarLeftTab v-for="(item, index) in sidebarItems" :key="index" :active="item.active">
                <template #icon>
                    <Component :is="item.icon" />
                </template>
                <template #name>
                    {{ item.title }}
                </template>
            </SidebarLeftTab>
        </div>
    </aside>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentIcon, UserIcon, EllipsisHorizontalCircleIcon } from '@heroicons/vue/24/outline'

const { defaultTransition } = useTailwindConfig()

const sidebarItems = [
    {
        title: 'Home',
        icon: HomeIcon,
        link: '#',
        active: true
    },
    {
        title: 'Explore',
        icon: HashtagIcon,
        link: '#'
    },
    {
        title: 'Notification',
        icon: BellIcon,
        link: '#',
    },
    {
        title: 'Messages',
        icon: InboxIcon,
        link: '#'
    },
    {
        title: 'Bookmarks',
        icon: BookmarkIcon,
        link: '#'
    },
    {
        title: 'Lists',
        icon: DocumentIcon,
        link: '#'
    },
    {
        title: 'Profile',
        icon: UserIcon,
        link: '#'
    },
    {
        title: 'More',
        icon: EllipsisHorizontalCircleIcon,
        link: '#'
    },
]
</script>
