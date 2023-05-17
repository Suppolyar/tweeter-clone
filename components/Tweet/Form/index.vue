<template>
  <TweetFormInput :user="props.user" @onSubmit="handleOnSubmit"/>
</template>

<script setup>
import useTweets from "~/composables/useTweets";

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const { postTweet } = useTweets()

const handleOnSubmit = async (data) => {
  try {
    const response = await postTweet(data)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

</script>
