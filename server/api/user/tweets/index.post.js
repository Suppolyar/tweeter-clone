import formidable from 'formidable'
import {createTweet} from "~/server/db/tweets";
import {tweetTransformer} from "~/server/transformers/tweet";
import {createMediaFile} from "~/server/db/mediaFile";

export default defineEventHandler(async (event) => {
    const form = formidable({})

    const response = await new Promise((resolve, reject) => {
        form.parse(event.node.req, (err, fields, files) => {
            if (err) {
                reject(err)
            } else
                resolve({fields, files})
        })
    })

    const {fields, files} = response

    const user = event.context

    const tweetData = {
        text: fields.text,
        authorId: user.id
    }

    const tweet = await createTweet(tweetData)

    Object.keys(files).map(async (key) => {
        return createMediaFile({
            url: '',
            providerPublicId: 'random_id',
            userId: user.id,
            tweetId: tweet.id
        })
    })


    return {
        // userId: user.id,
        // tweet: tweetTransformer(tweet)
        files
    }
})
