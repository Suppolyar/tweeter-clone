<template>
  <div class="flex flex-col">
      <SidebarRightPreviewCard title="What's happening">
          <SidebarRightPreviewCardItem v-for="(item, index) in whatsHappeningItems" :key="index">
              <div>
                  <h2 class="font-bold text-gray-800 text-md dark:text-white">{{item.title}}</h2>
                  <span class="text-xs text-gray-400">{{ item.count }}</span>
              </div>
          </SidebarRightPreviewCardItem>
      </SidebarRightPreviewCard>

      <SidebarRightPreviewCard title="Who to follow">
          <SidebarRightPreviewCardItem v-for="(item, index) in whoToFollowItems" :key="index">
              <div class="flex justify-between items-center p-2">
                  <div class="flex">
                      <img class="h-10 w-10 rounded-full object-cover" :src="item.image" :alt="item.handle">
                      <div class="flex flex-col ml-2">
                          <h2 class="font-bold text-gray-900 text-sm dark:text-white">{{item.name}}</h2>
                          <span class="text-xs text-gray-400">{{ item.handle }}</span>
                      </div>
                  </div>
                  <div class="flex h-full">
                      <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
                  </div>
              </div>
          </SidebarRightPreviewCardItem>
      </SidebarRightPreviewCard>
  </div>
</template>

<script setup>

const whatsHappeningItems = ref([
    {
        title: 'SpaceX',
        count: '19.9 k Tweets'
    },
    {
        title: 'LMAO',
        count: '100 k Tweets'
    },
    {
        title: 'Something strange...',
        count: '12.1 k Tweets'
    }
])

const whoToFollowItems = ref([
    {
        name: 'Storm Spirit',
        handle: '@stormspirit',
        image: 'https://i.pinimg.com/474x/a7/e7/6a/a7e76a734691e1296bb05e9004cde9ac--dota--storms.jpg'
    },
    {
        name: 'Tony Stark',
        handle: '@robots',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg'
    },
    {
        name: 'Johny Sins',
        handle: '@sexinstruktor',
        image: 'https://pbs.twimg.com/profile_images/1356982518495510533/M4-B3M0c_400x400.jpg'
    },
])
</script>
